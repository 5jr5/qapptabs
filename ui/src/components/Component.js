import { h } from 'vue'
import { QBadge } from 'quasar'

export default {
  name: 'QAppTabs',

  setup () {
    return () => h(QBadge, {
      class: 'QAppTabs',
      label: 'QAppTabs'
    })
  }
}
