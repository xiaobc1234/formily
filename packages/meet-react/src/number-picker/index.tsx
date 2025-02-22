import { connect, mapProps, mapReadPretty } from '@formily/react'
// import { NumberPicker as InputNumber } from '@alifd/next'
import InputNumber from '@alifd/meet-react/es/number-picker'
import { PreviewText } from '../preview-text'
import { mapSize, mapStatus } from '../__builtins__'
export const NumberPicker = connect(
  InputNumber,
  mapProps(mapSize, mapStatus),
  mapReadPretty(PreviewText.Input)
)

export default NumberPicker
