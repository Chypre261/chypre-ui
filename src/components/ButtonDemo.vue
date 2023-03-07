<template>
  <div>
    <Button theme="primary">Primary</Button>
    <Button theme="link">Link</Button>
  </div>
  <div>
    <Button theme="info">Info</Button>
    <Button theme="success">Success</Button>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue';
export default {
  name: 'ButtonDemo.vue',
  components: {Button}
};
</script>

<style lang="scss" scoped>
  div {
    padding-bottom: 12px;
  }
</style>