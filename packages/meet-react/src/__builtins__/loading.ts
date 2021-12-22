// import { Message } from '@alifd/next'
import Message from '@alifd/meet-react/es/message'

export const loading = async (
  title: React.ReactNode = 'Loading...',
  processor: () => Promise<any>
) => {
  let loading = setTimeout(() => {
    Message.loading(title as any)
  }, 100)
  try {
    return await processor()
  } finally {
    Message.hide()
    clearTimeout(loading)
  }
}
