// https://stackoverflow.com/questions/57659169/vue-nuxt-how-to-define-a-global-method-accessible-to-all-components
// https://nuxtjs.org/docs/2.x/directory-structure/plugins

import { isMobile } from 'mobile-device-detect'

export default (context, inject) => {
  inject('isMobile', isMobile)
}
