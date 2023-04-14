<template>
  <div>
    Default 1:
    <Dialog v-model:visible="x"
            :closeOnClickOverlay="false"
            :ok="f1"
            :cancel="f2"></Dialog>
    <Button @click="toggle">Toggle</Button>
  </div>
</template>

<script lang="ts">
import Dialog from '../lib/Dialog.vue';
import Button from '../lib/Button.vue';
import {ref} from 'vue';

export default {
  name: 'DialogDemo.vue',
  components: {Dialog, Button},
  setup() {
    const x = ref(false);
    const toggle = () => {
      x.value = !x.value;
      console.log('toggled');
    };
    const f1 = () => {
      // check form
      // return false
    };
    const f2 = () => {
    };
    return {
      x,
      toggle,
      f1,
      f2
    };
  }
};
</script>

<style lang="scss" scoped>

</style>