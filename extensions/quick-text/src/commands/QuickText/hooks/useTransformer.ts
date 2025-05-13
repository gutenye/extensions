import { useEffect, useState, useMemo } from 'react'
import { Clipboard } from '@raycast/api'
import type { Transformer } from '#/types'

const CODE_BLOCK = '```'

export const useTransformer = ({ transformer }: { transformer: Transformer }) => {
  const [resultText, setResultText] = useState('')

  useEffect(() => {
    ;(async () => {
      const { text } = await Clipboard.read()
      const newText = text.trim()
      if (!newText) {
        setResultText('')
        return
      }
      const resultText = await transformer.transform({ text: newText })
      setResultText(resultText)
    })()
  }, [transformer])

  const previewMarkdown = useMemo(() => {
    return `
#### Preview
${CODE_BLOCK}
${resultText}
${CODE_BLOCK}
### Example
${CODE_BLOCK}
${transformer.example.from.trim()}
${CODE_BLOCK}
->
${CODE_BLOCK}
${transformer.example.to.trim()}
${CODE_BLOCK}
`.trim()
  }, [resultText, transformer])

  return { resultText, previewMarkdown }
}
