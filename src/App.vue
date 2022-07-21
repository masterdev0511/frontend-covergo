<template>
  <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  components: {},
})
</script>

<style>
.child {
  @apply h-screen flex flex-col justify-center items-center;
}

.child > * {
  @apply my-4;
}

.child > h1 {
  @apply text-3xl font-bold;
}

.child .button {
  @apply w-40 py-3 text-center text-white bg-neutral-800 rounded;
}
</style>
