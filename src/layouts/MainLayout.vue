<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar class="bg-purple">

        <q-toolbar-title>
          Peticov AR
        </q-toolbar-title>

        <q-btn flat round dense icon="info" @click="dialog = true" />

      </q-toolbar>
    </q-header>

    <q-dialog v-model="dialog">
      <q-layout view="hHh lpR fFf" container class="bg-grey-3">
        <q-header bordered class="glossy bg-purple-8 text-white">
          <q-toolbar>
            <q-toolbar-title>
              Instruction
            </q-toolbar-title>
            <q-space />
            <q-btn icon="close" flat round dense v-close-popup />
          </q-toolbar>
        </q-header>

        <q-page-container>
          <q-page class="q-pa-sm">
            <q-markdown :src="readme" />
          </q-page>
        </q-page-container>

        <q-footer bordered class="bg-white text-black">
          <q-toolbar>
            <q-toolbar-title>
              <div class="text-center">
               <small>
                 &copy; {{ new Date().getFullYear() }} — VR & AR + Web technologies = ❤
               </small>
              </div>
              <EssentialLink
                v-for="link in essentialLinks"
                :key="link.title"
                v-bind="link"
              />
            </q-toolbar-title>
          </q-toolbar>
        </q-footer>
      </q-layout>
    </q-dialog>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'
import readme from '../../README.md'

const linksData = [
  {
    title: 'Github',
    caption: 'https://github.com/thauska/FestMA',
    icon: 'fab fa-github',
    link: 'https://github.com/thauska/FestMA'
  }
]

export default {
  name: 'MainLayout',
  components: { EssentialLink },
  data () {
    return {
      readme: readme,
      leftDrawerOpen: this.$q.platform.is.desktop,
      dialog: false,
      drawerLeft: false,
      drawerRight: true,
      essentialLinks: linksData
    }
  }
}
</script>
