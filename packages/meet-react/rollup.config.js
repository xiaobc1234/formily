// import cssPorter from 'rollup-plugin-css-porter';
import baseConfig, {
  removeImportStyleFromInputFilePlugin,
} from '../../scripts/rollup.base.js'

export default baseConfig(
  'formily.meet',
  'Formily.Meet',
  // cssPorter(),
  removeImportStyleFromInputFilePlugin()
)
