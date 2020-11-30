<script>
/**
 * Challenge #2
 * Create a counter that uses the Composition API to:
 *   - Keep track of a currentCount
 *   - Increment the count
 *   - Change the amount that the count can be incremented by
 */
export default {
  data() {
    return {
      currentCount: 0,
      changeAmount: 1
    }
  },
  methods: {
    incrementCount() {
      this.currentCount += this.changeAmount
    }
  }
}
</script>

<template>
  <div :class="$style['counter-wrapper']">
    <p>{{ currentCount }}</p>
    <button @click="incrementCount">Increment Count</button>
    <input type="number" v-model="changeAmount" />
  </div>
</template>

<style module>
.counter-wrapper {
  border: 2px solid green;
  padding: 1rem;
}
</style>
