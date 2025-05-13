import { Clipboard } from '@raycast/api'

import type { Transformer } from '#/types'

export const MarkdownImageWidth: Transformer = {
  name: 'Markdown: ImageWidth',
  example: {
    from: `
![ALT](url)
`,
    to: `
<img width=300 src=url alt=ALT>
`,
  },
  transform: async ({ text }) => {
    const lines = text.split('\n')
    const newLines = lines.map((line) => {
      const parts = line.match(/!\[(.*?)\]\((.*?)\)/)
      if (!parts) {
        return line
      }
      const [alt, url] = parts.slice(1)
      return `<img width="300" src="${url}" alt="${alt}">`
    })
    return newLines.join('\n')
  },
}
