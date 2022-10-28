<template>
  <q-select
    v-model="lang"
    :options="langOptions"
    :label="$t('language')"
    dense
    borderless
    emit-value
    map-options
    options-dense
    style="min-width: 150px"
    color="purple"
    label-color="white"
  >
   <template v-slot:prepend>
      <q-icon name="translate" color="white"/>
    </template>
  </q-select>
</template>

<script>
export default {
  data () {
    return {
      lang: this.$i18n.locale,
      langOptions: [
        { value: 'en-us', label: 'English' },
        { value: 'pt-br', label: 'Português' }
      ]
    }
  },
  watch: {
    lang (lang) {
      this.$i18n.locale = lang
    }
  }
}
</script>
