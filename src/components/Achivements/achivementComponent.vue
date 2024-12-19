// i didnt use components because they varied too often and wasnt many in number. maybe in the future i will make them components.
<template>
  
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AchivementBox',
  props: {
    title: { type: String, required: true },
    catagory: { type: String, required: true },
    year: { type: String, required: true },
    workedAs: { type: String, required: true },
    thumbnail: { type: String, required: true },
    description: { type: String, required: true },
  },
})
</script>

<style scoped>

</style>