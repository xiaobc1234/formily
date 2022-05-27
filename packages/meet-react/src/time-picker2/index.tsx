import moment from 'moment'
import { connect, mapProps, mapReadPretty } from '@formily/react'
// import { TimePicker2 as NextTimePicker2 } from '@alifd/next'
import NextTimePicker, {
  TimePickerProps,
} from '@alifd/meet-react/es/time-picker'
import { PreviewText } from '../preview-text'
import {
  formatMomentValue,
  momentable,
  mapSize,
  mapStatus,
} from '../__builtins__'

type ComposedTimePicker = React.FC<React.PropsWithChildren<TimePickerProps>> & {
  RangePicker?: React.FC<React.PropsWithChildren<any>>
}

const mapTimeFormat = function () {
  return (props: any) => {
    const format = props['format'] || 'HH:mm:ss'
    const onChange = props.onChange
    return {
      ...props,
      format,
      value: momentable(props.value, format),
      onChange: (value: moment.Moment | moment.Moment[]) => {
        if (onChange) {
          onChange(formatMomentValue(value, format))
        }
      },
    }
  }
}

export const TimePicker2: ComposedTimePicker = connect(
  NextTimePicker,
  mapProps(mapTimeFormat(), mapSize, mapStatus),
  mapReadPretty(PreviewText.TimePicker)
)

TimePicker2.RangePicker = connect(
  // 无线没有range, 先兼容
  NextTimePicker,
  mapProps(mapTimeFormat(), mapSize, mapStatus),
  mapReadPretty(PreviewText.TimePicker)
)

export default TimePicker2
