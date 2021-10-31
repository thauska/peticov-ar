<template>
  <q-page class="container">
    <Aframe />
  </q-page>
</template>

<script>
export default {
  name: 'PageAR',
  components: {
    Aframe: () => import('components/Aframe')
  }
}
</script>
