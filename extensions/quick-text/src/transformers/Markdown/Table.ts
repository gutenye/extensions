import { markdownTable } from 'markdown-table'

import type { Transformer } from '#/types'

export const MarkdownTable: Transformer = {
  name: 'Markdown: Table',
  example: {
    from: `
Line1
Line2
`,
    to: `
| Col1  | Col2  |
|-------|-------|
| Line1 | Line2 |
`,
  },
  transform: async ({ text }) => {
    const lines = text.split(/\n\s*/)
    return markdownTable([lines.map((_, index) => `Col${index + 1}`), lines.map((line) => line)])
  },
}
