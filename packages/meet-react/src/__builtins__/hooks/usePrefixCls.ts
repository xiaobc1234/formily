// import { ConfigProvider } from '@alifd/next'
import ConfigProvider from '@alifd/next/lib/config-provider'

export const usePrefixCls = (
  tag?: string,
  props?: {
    prefix?: string
  }
) => {
  const getContext = ConfigProvider['getContext']
  const prefix = props?.prefix ?? getContext()?.prefix ?? 'next-'
  return `${prefix}${tag ?? ''}`
}
