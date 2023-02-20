<template>
  <div>
    <TopNav></TopNav>
    <div class="banner">
      <h1>Chypre UI</h1>
      <h3>is just for you.</h3>
      <div class="actions">
        <a href="#">GitHub</a>
        <router-link to="/doc">Get Start</router-link>
      </div>
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
.banner {
  height: 60vh;
  > .actions {

  }
}
</style>