<template>
  <button class="cp-switch" @click="toggle" :class="{checked:value}">
    <span></span>
  </button>
</template>

<script lang="ts">
import {ref} from 'vue';

export default {
  name: 'Switch',
  props: {
    value: Boolean
  },
  setup(props,context) {
    const toggle = () => {
      context.emit('input', !props.value)
    }
    return {toggle};
  }
};
</script>

<style lang="scss">
$h: 22px;
$h2: $h - 4px;
.cp-switch {
  height: $h;
  width: $h*2;
  border: none;
  background: gray;
  border-radius: calc($h / 2);
  position: relative;
}

span {
  position: absolute;
  top: 2px;
  left: 2px;
  height: $h2;
  width: $h2;
  background: white;
  border-radius: calc($h2 / 2);
  transition: left 250ms;
}

.cp-switch.checked {
  background: #869558;
}

.cp-switch.checked > span {
  left: calc(100% - #{$h2} - 2px);
}
</style>