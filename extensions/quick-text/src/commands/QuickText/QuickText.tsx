import { List, ActionPanel, Action, Clipboard } from '@raycast/api'
import { transformers } from '#/transformers'
import type { Transformer } from '#/types'
import { useTransformer } from './hooks'

export default function QuickTextCommand() {
  return (
    <List isShowingDetail>
      {transformers.map((transformer) => (
        <Item key={transformer.name} transformer={transformer} />
      ))}
    </List>
  )
}

function Item({ transformer }: { transformer: Transformer }) {
  const { resultText, previewMarkdown } = useTransformer({ transformer })
  return (
    <List.Item
      title={transformer.name}
      detail={<List.Item.Detail markdown={previewMarkdown} />}
      actions={
        <ActionPanel>
          <Action title="Paste" onAction={createPasteAction({ resultText })} />
        </ActionPanel>
      }
    />
  )
}

function createPasteAction({ resultText }: { resultText: string }) {
  return async () => {
    await Clipboard.paste(resultText)
  }
}
