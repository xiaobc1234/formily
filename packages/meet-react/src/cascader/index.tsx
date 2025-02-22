import { connect, mapReadPretty, mapProps } from '@formily/react'
// import { CascaderSelect } from '@alifd/next'
import CascaderSelect from '@alifd/meet-react/es/cascader-select'
import { PreviewText } from '../preview-text'
import { mapSize, mapStatus } from '../__builtins__'
export const Cascader = connect(
  CascaderSelect,
  mapProps(
    {
      dataSource: true,
    },
    mapSize,
    mapStatus
  ),
  mapReadPretty(PreviewText.Cascader)
)

export default Cascader
