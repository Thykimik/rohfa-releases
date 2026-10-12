const escape = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

/** Dictionary strings mark inline code with backticks. */
export const inlineCode = (s: string) => escape(s).replace(/`([^`]+)`/g, '<code>$1</code>')

export const formatSize = (bytes: number) => `${Math.round(bytes / 1024 / 1024)} Mo`
