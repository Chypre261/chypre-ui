<template>
  <div>
    <TopNav></TopNav>
    <div class="banner">
      <h1>Chypre UI</h1>
      <h3>is just for you.</h3>
      <a>GitHub</a>
      <a>Get Start</a>
    </div>
  </div>
</template>

<script lang="ts">
import TopNav from '../components/TopNav.vue';

export default {
  name: 'Home.vue',
  components: {TopNav}
};
</script>

<style lang="scss" scoped>
h1, h3 {
  text-align: center;
}
</style>