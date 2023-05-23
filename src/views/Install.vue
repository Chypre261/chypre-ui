<template>
  <article>
    <h1>Installation</h1>
    <p>npm</p>
    <pre>
      <code class="language-shell hljs">npm i chypre-ui -S</code>
    </pre>
    <p>or</p>
    <pre>
      <code>yarn add chypre-ui</code>
    </pre>

    <p>
      下一节：
      <router-link to="/doc/get-started">开始使用</router-link>
    </p>
  </article>
</template>

<script lang="ts">
export default {
  name: 'Install.vue'
};
</script>

<style lang="scss" scoped>
code {
  line-height: 1.8;
  font-family: Menlo, Monaco, Consolas, Courier, monospace;
  font-size: 12px;
  padding: 18px 24px;
  background-color: #fafafa;
  border: 1px solid #eaeefb;
  border-radius: 4px;
  -webkit-font-smoothing: auto;
  display: block;
  overflow-x: auto;
}
</style>