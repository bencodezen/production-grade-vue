<script>
import { h } from 'vue'

export default {
  props: {
    level: {
      type: Number,
      default: 1
    }
  },
  render() {
    return h(`h${this.level}`, 'Hello Frontend Masters!')
  }
}
</script>

<style></style>
