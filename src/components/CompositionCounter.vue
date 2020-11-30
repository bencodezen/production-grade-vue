<script>
/**
 * Challenge #2
 * Create a counter that uses the Composition API to:
 *   - Keep track of a currentCount
 *   - Increment the count
 *   - Change the amount that the count can be incremented by
 */
import { reactive, toRefs } from 'vue'

export default {
  setup() {
    const state = reactive({
      currentCount: 0,
      changeAmount: 1
    })

    const incrementCount = () => {
      state.currentCount += state.changeAmount
    }

    return {
      ...toRefs(state),
      incrementCount
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
