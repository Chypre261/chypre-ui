<template>
  <div class="cp-tabs">
    <div class="cp-tabs-nav">
      <div class="cp-tabs-nav-item"
           :class="{selected: t===selected}"
           @click="select(t)"
           v-for="(t,index) in titles"
           :ref="el => {if(el) navItems[index]=el}"
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
import {computed, onMounted, ref} from 'vue';

export default {
  name: 'Tabs.vue',
  props: {
    selected: {
      type: String
    }
  },
  setup(props, context) {
    const navItems = ref<HTMLDivElement[]>([]);
    const indicator = ref<HTMLDivElement>(null)
    onMounted(()=>{

      const selectedItem = navItems.value.filter((el)=>el.classList.contains('selected'))[0]

      const {width} = selectedItem.getBoundingClientRect()

      indicator.value.style.width =width + 'px'
      console.log(width)
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
      navItems,
      indicator
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
    }
  }


  &-content {
    padding: 8px 0;
  }
}
</style>