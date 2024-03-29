<template>
  <div class="cp-tabs">
    <div class="cp-tabs-nav" ref="container">
      <div class="cp-tabs-nav-item"
           :class="{selected: t===selected}"
           @click="select(t)"
           v-for="(t,index) in titles"
           :ref="el => {if(t === selected) selectedItem=el}"
           :key="index">
        {{ t }}
      </div>
      <div class="cp-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="cp-tabs-content">
      <component class="cp-tabs-content-item" :is="current" :key="current.props.title"/>
    </div>
  </div>
</template>

<script lang="ts">
import Tab from './Tab.vue';
import {computed, onMounted, onUpdated, ref, watchEffect} from 'vue';

export default {
  name: 'Tabs.vue',
  props: {
    selected: {
      type: String
    }
  },
  setup(props, context) {
    const indicator = ref<HTMLDivElement>(null);
    const selectedItem = ref<HTMLDivElement>(null);
    const container = ref<HTMLDivElement>(null);

    onMounted(() => {
      watchEffect(() => {

        const {width} = selectedItem.value.getBoundingClientRect();
        indicator.value.style.width = width + 'px';

        const {left: leftContainer} = container.value.getBoundingClientRect();
        const {left: leftSelectedItem} = selectedItem.value.getBoundingClientRect();

        indicator.value.style.left = leftSelectedItem - leftContainer + 'px';

      });
    });

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
      current,
      indicator,
      selectedItem,
      container
    };
  }
};
</script>


<style lang="scss">
$blue: #485fc7;
$color: #333;
$border-color: #d9d9d9;
div.cp-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;

    &-item {
      padding: 8px 0px;
      margin: 0 16px;
      cursor: pointer;

      &:first-child {
        margin-left: 0;
      }

      &.selected {
        color: $blue;
      }
    }

    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      transition: all .3s;
    }
  }


  &-content {
    padding: 8px 0;
  }
}
</style>