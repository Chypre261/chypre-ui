<template>
  <div class="topnav">
    <div class="logo">logo</div>
    <ul class="menu">
      <li>menu1</li>
      <li>menu2</li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  name: 'TopNav.vue'
};
</script>

<style lang="scss" scoped>
$color: #007974;
.topnav {
  background: darkseagreen;
  color: $color;
  display: flex;
  padding: 16px;
  >.logo {
    max-width: 6em;
    margin-right: auto;
  }
  >.menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    >li {
      margin: 0 1em;
    }
  }
}
</style>