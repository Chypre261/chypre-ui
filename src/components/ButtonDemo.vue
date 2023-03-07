<template>
  <div>
    <h3>Themes:</h3>
    <Button theme="primary">Primary</Button>
    <Button theme="ghost">Ghost</Button>
  </div>
  <div>
    <h3>Functions:</h3>
    <Button theme="info">Info</Button>
    <Button theme="success">Success</Button>
    <Button theme="warning">Warning</Button>
    <Button theme="danger">Danger</Button>
  </div>
  <div>
    <h3>Size:</h3>
    <Button size="small" theme="info">Small</Button>
    <Button size="normal" theme="info">Normal</Button>
    <Button size="medium" theme="info">Medium</Button>
    <Button size="large" theme="info">Large</Button>
  </div>

  <div>
    <h3>Shape:</h3>
    <Button shape="round" theme="info">Info</Button>
    <Button shape="round" theme="success">Success</Button>
    <Button shape="round" theme="warning">Warning</Button>
    <Button shape="round" theme="danger">Danger</Button>
  </div>

  <div>
    <h3>Disabled</h3>
    <Button theme="info" disabled>Info</Button>
    <Button theme="success" disabled>Success</Button>
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