<template>
  <div class="child">
    <h1>Tell us about yourself</h1>
    <div>
      <p>Name</p>
      <input
        v-model="name"
        type="text"
      >
    </div>
    <div>
      <p>Age</p>
      <input
        v-model="age"
        type="number"
        min="1"
      >
    </div>
    <div>
      <p>Where do you live</p>
      <select v-model="rate">
        <option
          v-for="(country, index) in countries"
          :key="country.name"
          :value="index"
        >
          {{ country.name }}
        </option>
      </select>
    </div>
    <div class="flex flex-col w-60">
      <div
        v-for="(pack, index) in packages"
        :key="pack.name"
        class="whitespace-pre"
      >
        <input
          :id="pack.name"
          v-model="packageIndex"
          type="radio"
          :value="index"
        >
        <label :for="pack.name">{{ pack.name }} {{ pack.plus > 0 ? '(+' + standardPremium * pack.plus + countries[rate].unit + ', ' + pack.plus * 100 + '%)' : '' }}</label>
      </div>
    </div>
    <h2>
      You premium is:   {{ standardPremium * (1 + packages[packageIndex].plus) }}
    </h2>
    <div class="flex">
      <router-link
        to="/"
        class="button !w-28 !bg-white !text-black border border-neutral-800 mr-4"
      >
        Back
      </router-link>
      <button
        class="button !w-28"
        @click="onNext"
      >
        Next
      </button>
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
  computed: {
    standardPremium(): number {
      return this.age * 10 * (this.rate + 1)
    },
  },
  methods: {
    onNext() {
      if(this.name.length === 0) {
        alert('Please input your name!')
        return
      }
      this.$router.push(this.age > 0 && this.age < 100 ? '/summary' : '/error')
    },
  },
})
</script>

<style scoped>
.child input[type="text"], input[type="number"], select {
  @apply w-60 border-gray-300;
}

.child input[type="radio"] {
  @apply m-2;
}

.child > div:not(:last-child) {
  @apply !my-2;
}

.child > h2 {
  @apply text-xl font-bold;
}
</style>
