// import something here

// "async" is optional;
// more info on params: https://quasar.dev/quasar-cli/boot-files
export default async ({ Vue }) => {
  Vue.config.ignoredElements = [
    'a-scene',
    'a-assets',
    'a-asset-item',
    'a-marker',
    'a-entity',
    'a-text',
    'a-plane',
    'a-video',
    'a-camera',
    'a-cursor',
    'a-entity'
  ]
}
