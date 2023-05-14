<template>
  <div>
    <TopNav></TopNav>
    <div class="banner">
      <h1>Chypre UI</h1>
      <h3>is just for you.</h3>
      <div class="actions">
<!--        <a href="#" class="cp-button">
          <Button theme="ghost" size="large">
            GitHub
          </Button>
        </a>-->
        <router-link to="/doc">
          <Button theme="info" size="large">
            Get Start
          </Button>
        </router-link>
      </div>

      <div class="features">
        <ul>
          <li>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-vue"></use>
            </svg>
            <h3>Based on Vue 3.0</h3>
            <p>The latest version </p>
          </li>
          <li>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-ts"></use>
            </svg>
            <h3>Use TypeScript</h3>
            <p>Can catch mistakes in your editor.</p>
          </li>
          <li>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-react-inactive"></use>
            </svg>
            <h3>React support</h3>
            <p>Coming next ...</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import TopNav from '../components/TopNav.vue';
import Button from '../lib/Button.vue';

export default {
  name: 'Home.vue',
  components: {TopNav, Button}
};
</script>

<style lang="scss" scoped>

h1, h3 {
  text-align: center;
}

.banner {

  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  > .actions {
    width: 400px;
    margin: 10px auto;
    text-align: center;
  }
}

.features {
  margin: 64px auto;
  width: 375px;

  @media (min-width: 990px) {
    width: 800px;
  }
  @media (min-width: 1200px) {
    width: 1200px;
  }

  ul {
    display: flex;
    flex-wrap: wrap;

    > li {
      width: 400px;
      margin: 16px 0;
      display: grid;
      justify-content: start;
      align-content: space-between;
      grid-template-areas:
        "icon title"
        "icon text";
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;

      > svg {
        grid-area: icon;
        width: 64px;
        height: 64px;
      }

      > h3 {
        grid-area: title;
        font-size: 28px;
      }

      > p {
        grid-area: text
      }
    }
  }
}

</style>