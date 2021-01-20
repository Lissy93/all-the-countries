// This is the main.js file. Import global CSS and scripts here.
// Docs: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import '~/assets/styles/global.scss'
import '~/assets/styles/media-queries.scss'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
