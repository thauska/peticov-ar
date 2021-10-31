<template>
  <div>
    <a-scene vr-mode-ui="enabled: false" embedded arjs>
      <!-- Quadrado Mágico -->
      <a-marker id="cite" type="pattern" url="marker/pt-cite.patt">
        <a-plane
          src="assets/quadrado-magico-black.jpg"
          scale="7.3 7.3 7.3"
          rotation="-90 0 0"
          position="0 0 -3"
        >
        </a-plane>

        <a-plane
          color="white"
          width="3"
          position="-8 0.5 -1"
          rotation="-90 0 0"
        ></a-plane>
        <a-text
          value="Obra: Quadrado Magico Antonio Peticov"
          align="center"
          color="black"
          width="5"
          position="-8 0.8 -1"
          rotation="-90 0 0"
        ></a-text>
      </a-marker>

      <!--Disponibilitá-->
      <a-marker id="frac1" type="pattern" url="marker/pt-frac1.patt">
        <a-plane
          color="white"
          width="3"
          position="4.5 1 0"
          rotation="-90 0 0"
        ></a-plane>
        <a-text
          value="Obra: “Disponibilita” (1981)
                    Antonio Peticov"
          align="center"
          color="black"
          width="5"
          position="4.5 1.1 0"
          rotation="-90 0 0"
        ></a-text>

        <a-plane
          src="assets/disponibilita.jpg"
          width="3.8"
          height="5.1"
          rotation="-90 0 0"
        >
        </a-plane>
      </a-marker>

      <!--Ladder-->
      <a-marker id="frac2" type="pattern" url="marker/pt-frac2.patt">
        <a-image
          src="assets/ladder.png"
          scale="2 2 2"
          height="2.5"
          width="2"
          rotation="-8 0 0"
          position="0 0 -1.5"
          transparent="true"
        ></a-image>
      </a-marker>

      <!-- Vídeo -->
      <a-assets>
        <video
          id="peticov_animation"
          src="assets/peticov_animation.mp4"
          loop="true"
          crossorigin
        ></video>
      </a-assets>
      <a-marker id="frac3" type="pattern" url="marker/pt-frac3.patt">
        <a-video
          src="#peticov_animation"
          position="0 1 0"
          scale="2 2 2"
          width="1.5"
          rotation="-90 0 0"
          webkit-playsinline
          playsinline
        >
        </a-video>
      </a-marker>

      <!-- Labirinto -->
      <a-marker id="frac4" type="pattern" url="marker/pt-frac4.patt">
        <a-plane
          id="lab"
          src="assets/labirinto.jpg"
          scale="2 2 2"
          rotation="-90 0 0"
          animation="property: rotation; to: -90 360 0; dur: 2000; easing: linear; loop: true"
        >
        </a-plane>
        <a-plane
          color="white"
          width="3"
          position="3 0 0"
          rotation="-90 0 0"
        ></a-plane>
        <a-text
          value="Obra: “Labirinto” (1984)
                    Antonio Peticov"
          align="center"
          color="black"
          width="5"
          position="3 0.1 0"
          rotation="-90 0 0"
        ></a-text>
      </a-marker>
      <a-entity id="camera" camera></a-entity>
    </a-scene>
  </div>
</template>

<script>
import '@ar-js-org/ar.js/aframe/build/aframe-ar'

export default {
  name: 'Aframe',
  methods: {
    handleVideo () {
      const m = document.querySelector('a-marker#frac3')
      m.addEventListener('markerFound', (e) => {
        const entity = document.querySelector('video')
        entity.play()
        console.log('found')
      })
      m.addEventListener('markerLost', (e) => {
        const entity = document.querySelector('video')
        entity.pause()
        console.log('lost')
      })
    }
  },
  mounted () {
    this.handleVideo()
  },
  beforeCreate () {
    document.body.classList.add('arjs')
  },
  beforeDestroy () {
    location.reload()
  }
}
</script>

<style scoped>
a-scene {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

* {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
</style>
