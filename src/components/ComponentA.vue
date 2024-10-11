<script setup>

import {onMounted, ref} from "vue";
import OtherComponent from "./OtherComponent.vue";

onMounted(() => console.log('component a mounted.'))

const value = ref(1);
</script>

<template>
  <h1>Komponente A</h1>

  <button @click="value += 1">Interactive? {{ value }}</button>

  <OtherComponent />
</template>
