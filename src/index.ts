import { App } from 'vue'

import PTest from './components/PTest'
import PSelect from './components/PSelect'

const components = [
  PTest,
  PSelect
]

const install = (app: App) => {
  components.forEach(component => {
    app.component(component.name, component)
  })
}

export {
  PTest,
  PSelect,
  install
}

export default {
  install
}
