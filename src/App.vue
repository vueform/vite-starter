<template>
  <div class="max-w-[500px] w-full mt-10 mb-16 mx-auto">
    <Vueform v-bind="form" />
  </div>
</template>

<script setup>
import { ref } from "vue";

const form = ref({
  schema: {
    hello_world: {
      type: "text",
      label: "Hello",
      placeholder: "World",
    },
  },
});
</script>
