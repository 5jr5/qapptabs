import { boot } from 'quasar/wrappers'
import VuePlugin from 'quasar-ui-qapptabs'

export default boot(({ app }) => {
  app.use(VuePlugin)
})
