<template>
  <h1 v-if="level === 1">
    Hello Frontend Masters!
  </h1>
  <h2 v-else-if="level === 2">
    Hello Frontend Masters!
  </h2>
  <h3 v-else-if="level === 3">
    Hello Frontend Masters!
  </h3>
  <h4 v-else-if="level === 4">
    Hello Frontend Masters!
  </h4>
  <h5 v-else-if="level === 5">
    Hello Frontend Masters!
  </h5>
  <h6 v-else-if="level === 6">
    Hello Frontend Masters!
  </h6>
</template>

<script>
export default {
  props: {
    level: {
      type: Number,
      default: 1
    }
  }
}
</script>

<style></style>
