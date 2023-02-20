<template>
  <div class="topnav">
    <div class="toggleAside">|||</div>
    <div class="logo" @click="toggleMenu">logo</div>
    <ul class="menu">
      <li>menu1</li>
      <li>menu2</li>
    </ul>
  </div>
</template>

<script lang="ts">
import {inject, Ref} from 'vue';

export default {
  name: 'TopNav.vue',
  setup() {

    const menuVisible = inject<Ref<boolean>>('menuVisible');
    const toggleMenu = () => {
      menuVisible.value = !menuVisible.value;
      console.log(menuVisible);
    };

    return {toggleMenu};
  }
};
</script>

<style lang="scss" scoped>
$color: #007974;
$color-chypre: #869558;
.topnav {
  background: $color-chypre;
  color: $color;
  display: flex;
  padding: 16px;
  position: relative;

  > .logo {
    max-width: 6em;
    margin-right: auto;
  }

  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;

    > li {
      margin: 0 1em;
    }
  }
  > .toggleAside {
    display: none;
    width: 24px;
    height: 24px;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
  }

  @media (max-width: 500px) {
    > .toggleAside {
      display: inline-block;
    }
    .logo {
      margin: 0 auto;
    }
    .menu {
      display: none;
    }
  }
}
</style>