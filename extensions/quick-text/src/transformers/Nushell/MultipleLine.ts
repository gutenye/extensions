import type { Transformer } from '#/types'

export const NuShellMultipleLine: Transformer = {
  name: 'NuShell: MultpleLine',
  example: {
    from: `
ls \\
  --long
`,
    to: `
(ls
  --long
)
`,
  },
  transform: async ({ text }) => {
    return `(${text.replaceAll('\\', '')}\n)`
  },
}
