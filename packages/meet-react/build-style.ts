import { build } from '../../scripts/build-style'

build({
  esStr: '@alifd/meet-react/es/',
  libStr: '@alifd/meet-react/lib/',
  allStylesOutputFile: 'dist/meet-react.css',
})
