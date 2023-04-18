<template>
  <div>
    Default 1:
    <Dialog v-model:visible="x"
            :closeOnClickOverlay="false"
            :ok="f1"
            :cancel="f2">
      <template v-slot:title>
        Demo1
      </template>
      <template v-slot:content>
        <p>This is the first demo.</p>
      </template>
    </Dialog>
    <Button @click="toggle">Toggle</Button>
  </div>

  <div>
    Default 2:
    <Button @click="showDialog">Open Dialog</Button>
  </div>
</template>

<script lang="ts">
import Dialog from '../lib/Dialog.vue';
import Button from '../lib/Button.vue';
import {ref} from 'vue';
import {openDialog} from '../lib/OpenDialog';

export default {
  name: 'DialogDemo.vue',
  components: {Dialog, Button},
  setup() {
    const x = ref(false);
    const toggle = () => {
      x.value = !x.value;
    };
    const f1 = () => {
      // check form
      // return false
    };
    const f2 = () => {
    };

    const showDialog = () => {
      openDialog({
        title: 'Demo 2',
        content: 'This is Demo 2!',
        closeOnClickOverlay: false,
        ok: () => {
          console.log('ok');
        },
        cancel: () => {
          console.log('cancel');
        },
      });
    };
    return {
      x,
      toggle,
      f1,
      f2,
      showDialog
    };
  }
};
</script>

<style lang="scss" scoped>
div {
  padding-bottom: 12px;
}
</style>