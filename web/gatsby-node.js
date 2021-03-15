/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

let env = process.env.NODE_ENV || 'development'
require('dotenv').config({path: `./.env.${env}`})

async function createBlogPostPages (graphql, actions) {
  // Individual pages
  const page = graphql(`
  {
    allSanityPage(
      filter: { slug: { current: { ne: null } }, title: { ne: null }}
    ) {
      edges {
        node {
          slug {
            current
          }
        }
      }
    }
  }`).then(page => {
    if (page.errors) {
      Promise.reject(page.errors)
    }
    const pages = page.data.allSanityPage.edges.map(({node}) => node)
    pages.forEach(page => {
      actions.createPage({
        path: `/${page.slug.current}/`,
        component: require.resolve('./src/templates/page.js'),
        context: {
          slug: page.slug.current
        }
      })
    })
  })

  // Blog Post pages
  const post = graphql(`
  {
    allSanityPost(
      filter: { slug: { current: { ne: null } }, publishedAt: {local: {ne: null}}, title: { ne: null } }
    ) {
      edges {
        node {
          slug {
            current
          }
        }
      }
    }
  }`).then(post => {
    if (post.errors) {
      Promise.reject(post.errors)
    }
    const posts = post.data.allSanityPost.edges.map(({node}) => node)
    posts.forEach(post => {
      actions.createPage({
        path: `/blog/${post.slug.current}/`,
        component: require.resolve('./src/templates/post.js'),
        context: {
          slug: post.slug.current
        }
      })
    })
  })

  const category = graphql(`
  {
    allSanityCategory(
      filter: { slug: { current: { ne: null } }, title: { ne: null } }
    ) {
      edges {
        node {
          slug {
            current
          }
        }
      }
    }
  }`).then(category => {
    if (category.errors) {
      Promise.reject(category.errors)
    }
    const categories = category.data.allSanityCategory.edges.map(({node}) => node)
    const todayDate = new Date().toISOString().slice(0, 10)
    categories.forEach(category => {
      actions.createPage({
        path: `blog/category/${category.slug.current}/`,
        component: require.resolve('./src/templates/category.js'),
        context: {
          slug: category.slug.current,
          today: todayDate
        }
      })
    })
  })

  const tag = graphql(`
  {
    allSanityTag(
      filter: { slug: { current: { ne: null } }, title: { ne: null } }
    ) {
      edges {
        node {
          slug {
            current
          }
        }
      }
    }
  }`).then(tag => {
    if (tag.errors) {
      Promise.reject(tag.errors)
    }
    const categories = tag.data.allSanityTag.edges.map(({node}) => node)
    const todayDate = new Date().toISOString().slice(0, 10)
    categories.forEach(tag => {
      actions.createPage({
        path: `blog/tag/${tag.slug.current}/`,
        component: require.resolve('./src/templates/tag.js'),
        context: {
          slug: tag.slug.current,
          today: todayDate
        }
      })
    })
  })

  const blog = graphql(`
  {
    allSanityPost(
      sort: { fields: [publishedAt___local], order: DESC },
      filter: { slug: { current: { ne: null } }, publishedAt: {local: {ne: null}}, title: { ne: null } }
    ) {
      edges {
        node {
          slug {
            current
          }
          publishedAt {
            local
          }
        }
      }
    }
  }`).then(blog => {
    if (blog.errors) {
      Promise.reject(blog.errors)
    }
    const todayDate = new Date().toISOString().slice(0, 10)
    const post = blog.data.allSanityPost.edges.map(({node}) => node).filter(event => event.publishedAt.local <= todayDate)

    const postsPerPage = 8
    const numPages = Math.ceil(post.length / postsPerPage)

    Array.from({length: numPages}).forEach((_, i) => {
      actions.createPage({
        path: i === 0 ? `/blog` : `/blog/${i + 1}`,
        component: require.resolve('./src/templates/blog.js'),
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1,
          today: todayDate
        }
      })
    })
  })

  // Return a Promise which would wait for both the queries to resolve
  return Promise.all([page, post, tag, category, blog])
}
exports.createPages = async ({graphql, actions, reporter}) => {
  await createBlogPostPages(graphql, actions, reporter)
}
exports.onCreateWebpackConfig = ({stage, actions, getConfig}) => {
  if (stage === 'build-javascript') {
    const config = getConfig()
    const miniCssExtractPlugin = config.plugins.find(
      plugin => plugin.constructor.name === 'MiniCssExtractPlugin'
    )
    if (miniCssExtractPlugin) {
      miniCssExtractPlugin.options.ignoreOrder = true
    }
    actions.replaceWebpackConfig(config)
  }
}

exports.onCreateNode = ({node, actions, getNode}) => {
  const {createNodeField} = actions
  if (node.internal.type === `sanityPost`) {
    const value = createFilePath({node, getNode})
    createNodeField({
      name: `slug`,
      node,
      value
    })
  }
}
