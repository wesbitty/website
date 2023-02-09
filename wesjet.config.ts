import { makeSource } from 'wesjet/maker'
import highlight from 'rehype-highlight'
import { contentDirPath } from './wesbitty/lib/utils'

import * as documentTypes from './wesbitty/lib'

export default makeSource({
  contentDirPath,
  documentTypes,
  mdx: { rehypePlugins: [highlight] },
})
