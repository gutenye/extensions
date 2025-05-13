// import * as Nushell from './Nushell'
import * as Markdown from './Markdown'
import * as Slack from './Slack'

export const transformers: Transformer[] = Object.values({ ...Markdown, ...Slack })

export interface Transformer {
  name: string
  example: { from: string; to: string }
  transform: (options: { text: string }) => Promise<string>
}
