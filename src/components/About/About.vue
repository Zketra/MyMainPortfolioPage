<template>
  <div class="father">
    <div class="content">
      <img src="../../assets/images/Line.png" alt="Line" class="line" />
      <div class="text">
        <h3 class="title">About</h3>
        <p class="text">
          I am an Developer, an Musician and an Actor. Currently doing an apprenticeship at Deutsche Telekom as a Software-Developer</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: "About",
  },
)
</script>

<style scoped>
  h3 {
    font-size: 40px;
    font-weight: inherit;
    margin: 0;
  }

  p {
    margin: 0;
  }

  .line {
    margin-right: 50px;
  }

  .father {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
  }

  .content {
    display: flex;
    width: 70vw;
    align-items: center;
  }

</style>