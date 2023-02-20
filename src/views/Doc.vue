<template>
  <TopNav></TopNav>
  <div class="content">
    <aside>
      <h2>Components</h2>
      <ol>
        <li>
          <router-link to="doc/switch">Switch</router-link>
        </li>
      </ol>
    </aside>
    <main>main</main>
  </div>
</template>

<script lang="ts">
import TopNav from '../components/TopNav.vue'
export default {
  name: 'Doc.vue',
  components: {TopNav}
};
</script>

<style lang="scss" scoped>

</style>