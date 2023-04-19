<template>
  <div class="cp-tabs">
    <div class="cp-tabs-nav">
      <div class="cp-tabs-nav-item"
           :class="{selected: t===selected}"
           @click="select(t)"
           v-for="(t,index) in titles"
           :key="index">
        {{ t }}
      </div>
    </div>
    <div class="cp-tabs-content">
      <component class="cp-tabs-content-item" :is="current" :key="current.props.title"/>
    </div>
  </div>
</template>

<script lang="ts">
import Tab from './Tab.vue';
import {computed} from 'vue';

export default {
  name: 'Tabs.vue',
  props: {
    selected: {
      type: String
    }
  },
  setup(props, context) {
    const defaults = context.slots.default();
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error('The children of Tabs tags must be Tab tags!');
      }
    });
    const titles = defaults.map((tag) => {
      return tag.props.title;
    });
    const select = (t) => {
      context.emit('update:selected', t);
    };
    const current = computed(() => {
      return defaults.find((tag) => {
        return tag.props.title === props.selected;
      });
    });
    return {
      defaults,
      titles,
      select,
      current
    };
  }
};
</script>


<style lang="scss">
$blue: #485fc7;
$color: #333;
$border-color: #d9d9d9;
.cp-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;

    &-item {
      padding: 8px 10px;
      margin: 0 16px;
      cursor: pointer;

      &:first-child {
        margin-left: 0;
      }

      &.selected {
        color: $blue;
      }
    }
  }

  &-content {
    padding: 8px 0;
  }
}
</style>