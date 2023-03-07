<template>
  <button class="cp-button" :class="classes" :disabled="disabled">
    <!--    <span>loading</span>-->
    <slot></slot>
  </button>
</template>

<script lang="ts">
import {computed} from 'vue';

export default {
  name: 'Button.vue',
  inheritAttrs: false,
  props: {
    theme: {
      type: String,
      default: 'primary'
    },
    size: {
      type: String,
      default: 'normal'
    },
    shape: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const {theme, size, shape} = props;

    const classes = computed(() => {
      return {
        [`cp-${theme}`]: theme,
        [`cp-${size}`]: size,
        [`cp-${shape}`]: shape
      };
    });
    return {classes};
  }
};
</script>

<style lang="scss" scoped>
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$radius: 4px;
$grey: grey;

$color-primary: #00d1b2;
$color-info: #3e8ed0;
$color-success: #48c78e;
$color-warning: #ffe08a;
$color-danger: #f14668;

.cp-button {
  box-sizing: border-box;
  padding: 8px 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);

  & + & {
    margin-left: 8px;
  }

  &.cp-primary {
    &:hover,
    &:focus {
      color: $blue;
      border-color: $blue;
    }
  }

  &.cp-ghost {
    border-color: transparent;
    text-decoration: underline;

    &:hover, &:focus {
      color: lighten($blue, 10%);
    }
  }

  &.cp-info {
    background: $color-info;
    border-color: transparent;
    color: white;

  }

  &[disabled] {
    filter: brightness(70%);
    cursor: not-allowed;
  }

  &.cp-success {
    background: $color-success;
    border-color: transparent;
    color: white;
  }

  &.cp-warning {
    background: $color-warning;
    border-color: transparent;
  }

  &.cp-danger {
    background: $color-danger;
    border-color: transparent;
    color: white;
  }

  &.cp-small {
    font-size: 12px;
  }

  &.cp-normal {
    font-size: 14px;
  }

  &.cp-mediam {
    font-size: 16px;
  }

  &.cp-large {
    font-size: 18px;
  }

  &.cp-round {
    border-radius: $h / 2;
  }


  &:focus {
    outline: none;
  }

  &::-moz-focus-inner {
    border: 0;
  }
}
</style>