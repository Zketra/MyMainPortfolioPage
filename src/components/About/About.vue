<template>
  <div id="About" class="father">
    <div class="content">
      <img src="../../assets/images/Line.png" alt="Line" class="line" />
      <div class="text">
        <h3 class="title">About</h3>
        <p class="text">I am a developer, a musician, and an actor. Currently doing an apprenticeship at Deutsche Telekom as a software developer.</p>
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
    margin-bottom: 80px;
  }

  .content {
    display: flex;
    width: 50vw;
    align-items: center;
  }

  @media (max-width: 768px) {
    .content {
      width: 80vw;
    }
  }

</style>