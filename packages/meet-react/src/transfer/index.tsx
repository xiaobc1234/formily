import { connect, mapProps } from '@formily/react'
// import { Transfer as NextTransfer } from '@alifd/next'
import NextTransfer from '@alifd/meet-react/es/transfer'

export const Transfer = connect(
  NextTransfer,
  mapProps({
    dataSource: true,
  })
)

export default Transfer
