<template>
  <div class="child">
    <h1>Ooops</h1>
    <p class="text-center">
      Your age is over our accepted limit.<br>
      We are sorry but we cannot insure you now.
    </p>
    <router-link
      to="/"
      class="button"
    >
      OK :(
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  components: {},
})
</script>
