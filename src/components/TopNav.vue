<template>
  <div class="topnav">
    <div class="toggleAside" @click="toggleMenu">|||</div>
    <div class="logo">
      <router-link to="/">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-frog"></use>
        </svg>
      </router-link>
    </div>
    <ul class="menu">
<!--      <li>Sponsor</li>-->
      <li>
        <router-link to="/doc/switch">
          Doc
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import {inject, Ref} from 'vue';
import '../index.scss';

export default {
  name: 'TopNav.vue',
  setup() {

    const menuVisible = inject<Ref<boolean>>('menuVisible');
    const toggleMenu = () => {
      menuVisible.value = !menuVisible.value;
    };

    return {toggleMenu};
  }
};
</script>

<style lang="scss" scoped>
$color: #007974;
$color-chypre: #869558;

$color-chypre: #f4f3e8; // bg
$color-primary: #35472d; // theme
$color-primary-light: #c5eab2; // light

.topnav {

  color: $color-primary;
  display: flex;
  padding: 16px;

  top: 0;
  left: 0;
  width: 100%;

  > .logo {
    max-width: 6em;
    margin-right: auto;

    svg {
      width: 3rem;
      height: 3rem;
    }
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