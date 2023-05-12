<template>
  Tab Demo 1:
  <Tabs v-model:selected="x">
    <Tab title="Nav 1">Content 1</Tab>
    <Tab title="Nav 2 (long title)">Content 2</Tab>
  </Tabs>
</template>

<script lang="ts">
import Tabs from '../lib/Tabs.vue';
import Tab from '../lib/Tab.vue';
import {ref} from 'vue';

export default {
  name: 'TabDemo.vue',
  components: {Tabs, Tab},
  setup() {
    const x=ref('Nav 1')

    return {
      x
    }
  }
};
</script>

<style lang="scss" scoped>

</style>