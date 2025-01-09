<template>
  <div class="father">
    <div class="content">
      <div class="left">
        <a href="https://www.demirbags.com"><img src="../../assets/icons/Logo.png" alt="Logo" class="logo"></a>
        <span>© 2025 LorexMedia</span>
      </div>
      <div class="right">
        <a href="https://www.lorexmedia.com">LorexMedia</a>
      </div>
    </div>
  </div>    
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: "Footer",
  setup() {
        
  },
})
</script>

<style scoped>
  .father {
    width: 100vw;
    background-color: #0a0a0a;
    display: flex;
    align-content: center;
    justify-content: center;
    padding: 30px 0;
    border-top: solid 1px #444444 ;
  }

  .content {
    width: 70vw;
    display: flex;
    justify-content: space-between;

  }

  .content div {
    display: flex;
    flex-flow: column;
    align-content: center;
  }

  .logo {
    width: 50px;
  }
</style>