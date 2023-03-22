<template>
  <div>
    Default 1:
    <Dialog v-model:visible="x" @update:visible="x = $event"></Dialog>
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
    const x = ref(true);
    const toggle = () => {
      x.value = !x.value;
    };
    return {
      x,
      toggle
    };
  }
};
</script>

<style lang="scss" scoped>

</style>