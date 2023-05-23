<template>
  <div class="layout">
    <TopNav class="nav"/>
    <div class="content">
      <aside v-if="menuVisible">
        <h2>Doc</h2>
        <ol>
          <li>
            <router-link to="/doc/intro">Intro</router-link>
          </li>
          <li>
            <router-link to="/doc/install">Install</router-link>
          </li>
          <li>
            <router-link to="/doc/get-started">Get Started</router-link>
          </li>
        </ol>
        <h2>Components</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import TopNav from '../components/TopNav.vue';
import {inject, Ref} from 'vue';
import {router} from '../router';

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
.router-link-active {
  text-decoration: underline;
}
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .nav {
    flex-shrink: 0;
  }
  > .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 156px;
    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}
.content {
  display: flex;
  > aside {
    flex-shrink: 0;
  }
  > main {
    flex-grow: 1;
    padding: 16px;
  }
}
aside {
  width: 150px;
  padding: 16px;
  position: fixed;
  top: 50px;
  left: 0;
  padding-top: 70px;
  height: 100%;
  > h2 {
    margin-bottom: 4px;
  }
  > ol {
    > li {
      padding: 4px 0;
    }
  }
}
main {
  overflow: auto;
}
</style>