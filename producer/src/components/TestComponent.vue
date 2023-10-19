<template>
  <button :onClick="click">{{ test }}</button>
  <TeButton :onClick="click">This button is from te-cc</TeButton>
</template>

<script setup lang="ts">
// import { TeButton } from "@te/ui-components/dist/base";

import dayJs from "dayjs";
import { computed } from "vue";
function click() {
  console.log("click click");
}

const test = computed(() => dayJs());
</script>
