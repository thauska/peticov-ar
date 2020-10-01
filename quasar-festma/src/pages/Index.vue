<template>
  <q-page class="container scene">

    <a-scene arjs='debugUIEnabled: false;'>

        <a-marker id='cite' type='pattern' url='marker/pt-cite.patt'>
            <a-plane src="quadrado-magico-black.jpg" scale="5.3 5.3 5.3" rotation="-90 0 0" position="0 0 -3">
            </a-plane>

            <a-plane color="white" width="5" position="-8 0.5 -1" rotation="-90 0 0"></a-plane>
            <a-text value="Obra: Quadrado Magico Antonio Peticov" align="center" color="black" width="5"
                position="-8 0.8 -1" rotation="-90 0 0"></a-text>
        </a-marker>

        <a-marker id='frac1' type='pattern' url='marker/pt-frac1.patt'>
            <a-plane color="white" width="5" position="4.5 1 0" rotation="-90 0 0"></a-plane>
            <a-text value="Obra: “Disponibilita” (1981)
            Antonio Peticov" align="center" color="black" width="5"
                position="5 1.1 0" rotation="-90 0 0"></a-text>

            <a-plane src="disponibilita.jpg" width="3.8" height="5.1" rotation="-90 0 0">
            </a-plane>
        </a-marker>

        <a-marker id='frac2' type='pattern' url='marker/pt-frac2.patt'>
            <a-plane src="ladder.png" scale="2 2 2" height="2.5" width="2" rotation="-8 0 0" position="0 0 -1.5">
            </a-plane>
        </a-marker>

        <a-assets>
            <video id="vid" src="peticov_animation.mp4" loop="true" crossorigin muted="muted"></video>
        </a-assets>

        <a-marker id='frac3' type='pattern' url='marker/pt-frac3.patt' vidhandler>
            <a-plane position='0 0 0' scale="2 2 2" width="1.5" rotation="-90 0 0" material='transparent:true;src:#vid'></a-plane>
        </a-marker>

        <a-marker id='frac4' type='pattern' url='marker/pt-frac4.patt'>
            <a-plane id='lab' src="labirinto.jpg" scale="2 2 2" rotation="-90 0 0">
                <a-animation attribute="rotation" dur="10000" fill="forwards" to="-90 360 0" repeat="indefinite"></a-animation>
            </a-plane>
            <a-plane color="white" width="3" position="3 0 0" rotation="-90 0 0"></a-plane>
            <a-text value="Obra: “Labirinto” (1984)
            Antonio Peticov" align="center" color="black" width="5"
                position="3 0.1 0" rotation="-90 0 0"></a-text>
        </a-marker>

        <a-camera-static />
    </a-scene>
  </q-page>
</template>

<style>
.scene {
    z-index: 100 !important;
}
</style>

<script>
export default {
  name: 'PageIndex',
  mounted () {
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
}
</script>
