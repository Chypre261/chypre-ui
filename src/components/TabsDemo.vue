<template>
  Tab Demo 1:
  <Tabs>
    <Tab title="Nav 1">Content 1</Tab>
    <Tab title="Nav 2">Content 2</Tab>
  </Tabs>
</template>

<script lang="ts">
import Tabs from '../lib/Tabs.vue';
import Tab from '../lib/Tab.vue';

export default {
  name: 'TabDemo.vue',
  components: {Tabs, Tab}
};
</script>

<style lang="scss" scoped>

</style>