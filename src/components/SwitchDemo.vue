<template>
  <div>
    switch demo:
    <Switch :value="y" @input="y = $event"></Switch>
  </div>
</template>

<script lang="ts">
import Switch from '../lib/Switch.vue';
import {ref} from 'vue';
export default {
  name: 'SwitchDemo.vue',
  components: {Switch},
  setup() {
    const y = ref(true)
    return {y}
  }
};
</script>

<style lang="scss" scoped>

</style>