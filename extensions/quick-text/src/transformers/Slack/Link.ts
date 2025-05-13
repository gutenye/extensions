import { Clipboard } from '@raycast/api'

import type { Transformer } from '#/types'

// handle title contains '()' case
export const SlackLink: Transformer = {
  name: 'Slack: Link',
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
    // () -> <>
    // #123 -> ''
    const newTitle = title
      .replaceAll('(', '<')
      .replaceAll(')', '>')
      .replace(/#\d+\s*$/, '')
      .trim()
    const newUrl = url.trim()
    return `[${newTitle}](${newUrl})`
  },
}
