import { connect, mapReadPretty, mapProps } from '@formily/react'
// import { Input as NextInput } from '@alifd/next'
import NextInput, { InputProps } from '@alifd/meet-react/es/input'
import { PreviewText } from '../preview-text'
import { mapSize, mapStatus } from '../__builtins__'

type ComposedInput = React.FC<InputProps> & {
  TextArea?: React.FC<InputProps>
}

export const Input: ComposedInput = connect(
  NextInput,
  mapProps(mapSize, mapStatus),
  mapReadPretty(PreviewText.Input)
)

Input.TextArea = connect(
  NextInput.TextArea,
  mapProps(mapSize, mapStatus),
  mapReadPretty(PreviewText.Input)
)

export default Input
