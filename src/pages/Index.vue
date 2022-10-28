<template>
<q-page-container>
  <q-page padding class="flex justify-center">
    <div class="q-pa-md">
      <div class="column items-center">
        <div class="col q-mb-sm">
          <img alt="Quadrado Mágico" src="assets/quadrado-magico-kami.jpg" width="150px" >
        </div>
        <div class="col q-pt-md">
          <p class="text-h4 text-bold text-black text-center">
              <span class="bottom-dotted">{{$t('name')}}</span> {{$t('art')}} {{$t('in')}}

              <span v-if="this.$i18n.locale === 'en-us'"> {{$t('augumented')}} {{$t('reality')}}</span>
              <span v-else>{{$t('reality')}} {{$t('augumented')}}</span>

              <q-tooltip anchor="top left" self="center middle">
                {{$t('subtitleInfo')}}
              </q-tooltip>
          </p>
        </div>
        <div class="col text-justify">
          <p class="text-body1">{{$t('usageInfoPartOne')}} <span><q-icon size="sm" name="info" /></span> {{$t('usageInfoPartTwo')}}</p>
        </div>
        <div class="col q-pa-md">
          <q-btn color="purple" glossy
            class="q-mt-xs text-no-wrap"
            push
            :label="$t('startAugmentedReality')"
            to="/ar"
          />
      </div>
      </div>
    </div>
  </q-page>
</q-page-container>
</template>

<script>
export default {
  name: 'PageIndex'
}
</script>

<style scoped>
.bottom-dotted {
  border-bottom: 1px dotted #000;
}
@media (min-width: 768px) {
  .text-h4 {
    font-size: 2rem
  }
}
@media (max-width: 768px) {
  .text-h4 {
    font-size: 1.8rem
  }
}
</style>
