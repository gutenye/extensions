import { Clipboard } from '@raycast/api'

import type { Transformer } from '#/types'

export const MarkdownLink: Transformer = {
  name: 'Markdown: Link',
  example: {
    from: `
TITLE
URL
`,
    to: `
[TITLE](URL)
`,
  },
  transform: async ({ text: url }) => {
    const { text: title } = await Clipboard.read({ offset: 1 })
    if (!title) {
      return url
    }
    return `[${title.trim()}](${url.trim()})`
  },
}
