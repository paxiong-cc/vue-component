import { App } from 'vue'
import Test from './index.vue'
Test.install = (app: App) => {
  app.component(Test.name, Test)
}

export default Test
