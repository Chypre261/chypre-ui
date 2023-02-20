<template>
  <TopNav></TopNav>
  <div class="content">
    <aside v-if="menuVisible">
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
import TopNav from '../components/TopNav.vue';
import {inject, Ref} from 'vue';

export default {
  name: 'Doc.vue',
  components: {TopNav},

  setup() {
    const menuVisible = inject<Ref<boolean>>('menuVisible');
    return {menuVisible};
  }
};
</script>

<style lang="scss" scoped>
aside {
  background: lightgrey;
  width: 150px;
  padding: 16px;

  > h2 {
    margin-bottom: 4px;
  }

  > ol {
    > li {
      padding: 4px 0;
    }
  }

  @media (max-width: 500px) {
    position: relative;
    z-index: 10;
    top: 0;
    left: 0;
  }
}
</style>