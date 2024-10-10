<script setup lang="ts">

import {onMounted} from "vue";
import OtherComponent from "./OtherComponent.vue";

onMounted(() => console.log('component b mounted.'))

</script>

<template>
  <h1>Komponente B</h1>

  <OtherComponent />
</template>
