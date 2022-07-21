<template>
  <div class="child">
    <h1>Summary</h1>
    <h3 class="text-xl font-bold">
      {{ name }}
    </h3>
    <p>Name: {{ name }}</p>
    <p>Age: {{ age }}</p>
    <p>Where do you live: {{ countries[rate].name }}</p>
    <p>Package: {{ packages[packageIndex].name }}</p>
    <p>Premium: {{ 10 * age * (rate + 1) * (1 + packages[packageIndex].plus) + countries[rate].unit }}</p>
    <div class="flex">
      <router-link
        to="/information"
        class="button !w-28 !bg-white !text-black border border-neutral-800 mr-4"
      >
        Back
      </router-link>
      <router-link
        to="/"
        class="button !w-28"
      >
        Next
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRef } from 'vue'
import { globalState } from '../store'

export default defineComponent({
  setup() {
    return {
      name: toRef(globalState, 'name'),
      age: toRef(globalState, 'age'),
      rate: toRef(globalState, 'rate'),
      packageIndex: toRef(globalState, 'packageIndex'),
      countries: toRef(globalState, 'countries'),
      packages: toRef(globalState, 'packages'),
    }
  },
})
</script>
