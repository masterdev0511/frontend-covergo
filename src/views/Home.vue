<template>
  <div class="child">
    <h1>Hello There!</h1>
    <p>Let's buy some insurance. It is going to take only a few steps.</p>
    <router-link
      to="/information"
      class="button"
    >
      Start
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
  },
})
</script>
