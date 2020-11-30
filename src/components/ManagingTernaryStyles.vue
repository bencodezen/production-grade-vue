<script>
export default {
  props: {
    showElement: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    titleClassNames() {
      return showElement ? 'is-visible is-bold' : ''
    }
  }
}
</script>

<template>
  <!-- Ternary Statement Inline -->
  <h1 :class="showElement ? 'is-visible is-bold' : ''">
    Hello Frontend Masters: Styled with a Ternary Statement!
  </h1>
  <!-- Computed Class Names -->
  <h1 :class="titleClassNames">
    Hello Frontend Masters: Styled with a Computed Property
  </h1>
</template>

<style>
.is-visible {
  opacity: 1;
}

.is-bold {
  font-weight: bold;
}
</style>
