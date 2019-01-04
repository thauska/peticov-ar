<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar
        color="grey-5"
        glossy
        :inverted="$q.theme === 'ios'"
      >

        <q-toolbar-title>
          <img src="statics/Logo_festma.png" width="90vh">
          <!-- <div slot="subtitle">Running on Quasar v{{ $q.version }}</div> -->
        </q-toolbar-title>

        <q-btn
          dense
          round
          @click="modalAction = true"
          aria-label="Menu"
          color="grey-6"
        >
          <q-icon name="code" />
        </q-btn>
      </q-toolbar>
    </q-layout-header>

    <q-modal v-model="modalAction" :content-css="{minWidth: '80vw', minHeight: '80vh'}">
      <q-modal-layout>
        <q-toolbar slot="header" color="grey-6">
          <!-- <q-btn
            flat
            round
            dense
            @click="layoutModal = false"
            icon="reply"
          /> -->
          <q-toolbar-title>
            FestMA
          </q-toolbar-title>
        </q-toolbar>

        <q-toolbar slot="footer" color="white">
          <q-toolbar-title>
            <q-btn color="dark" class="float-right" @click="modalAction = false" label="Fechar" />
          </q-toolbar-title>
        </q-toolbar>

        <div class="layout-padding">
          <p><img src="statics/Logo_festma.png" width="200vh" alt=""></p>
          <p>AR WebApps for Maths and Art Festival from UFPA.</p>
          <p>1. Open one of the custom markers. There're five custom markers: </p>
          <ul>
            <li><a href="https://github.com/thauska/FestMA/blob/master/marker/marker-cite.png" target="_blank">marker logo of CITE</a></li>
            <li><a href="https://github.com/thauska/FestMA/blob/master/marker/marker-frac1.png" target="_blank">marker Pythagoras Tree</a></li>
            <li><a href="https://github.com/thauska/FestMA/blob/master/marker/marker-frac2.png" target="_blank">marker Fractal Pentagonal</a></li>
            <li><a href="https://github.com/thauska/FestMA/blob/master/marker/marker-frac3.png" target="_blank">marker Sierpinski Triangle</a></li>
            <li><a href="https://github.com/thauska/FestMA/blob/master/marker/marker-frac4.png" target="_blank">marker Sierpinski Carpet</a></li>
          </ul>
          <p>2. Open this augmented reality webapps in your phone browser, and point it at your screen.</p>
          <p>You are done! It will open a webpage which read the phone camera, localize the custom marker and add the art of <a href="https://pt.wikipedia.org/wiki/Antonio_Peticov" target="_blank">Antonio Peticov</a>.
            Each custom marker will have an different object appearing. Two examples as you can see below.</p>
          <p><img src="https://github.com/thauska/FestMA/raw/master/images/webappFestMA.jpeg" width="300vh" alt=""></p>
          <p><img src="https://github.com/thauska/FestMA/raw/master/images/theladder.jpeg" width="300vh" alt=""></p>
          <span class="1-display-2">Acknowledgment</span>
          <p>Special thanks for:</p>
           <ul>
              <li>Cristina Vaz, my coordinator, for trusting me,</li>
              <li>Romulo Gabriel <a href="https://github.com/Yemolai" target="_blank">@yemolai</a> by encouraging study, and</li>
              <li><a href="https://twitter.com/CondeNerd"  target="_blank">Victor Almeida</a> for helping me with design! </li>
              <li><a href="https://github.com/patrickmonteiro"  target="_blank">Patrick Monteiro</a> for integration Quasar Framework! </li>
            </ul>
        </div>
      </q-modal-layout>
    </q-modal>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
      modalAction: false
    }
  },
  methods: {
    openURL
  }
}
</script>

<style>
</style>
