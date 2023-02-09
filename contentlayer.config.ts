// TODO remove eslint-disable when fixed https://github.com/import-js/eslint-plugin-import/issues/1810
// eslint-disable-next-line import/no-unresolved
import { makeSource } from 'contentlayer/source-files'
import highlight from 'rehype-highlight'
import { contentDirPath } from './src/lib/utils'

import * as documentTypes from './src/lib'

export default makeSource({
  contentDirPath,
  documentTypes,
  mdx: { rehypePlugins: [highlight] },
})
