// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import richDate from 'part:@sanity/form-builder/input/rich-date/schema'

// document schemas
import author from './documents/author'
import category from './documents/category'
import page from './documents/page'
import home from './documents/home'
import siteSettings from './documents/siteSettings'
import navigation from './documents/navigation'
import post from './documents/post'
import tag from './documents/tag'

// Object types
import siteLink from './objects/siteLink'
import bodyPortableText from './objects/bodyPortableText'
import mainImage from './objects/mainImage'
import seo from './objects/seo'
import youtube from './objects/youtube'
import pdfFile from './objects/pdfFile'
import iframe from './objects/iframe'
import link from './objects/link'
import singleLink from './objects/singleLink'
import vimeo from './objects/vimeo'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    siteSettings,
    post,
    category,
    page,
    home,
    tag,
    author,
    bodyPortableText,
    mainImage,
    richDate,
    siteLink,
    navigation,
    seo,
    youtube,
    pdfFile,
    iframe,
    link,
    singleLink,
    vimeo
  ])
})
