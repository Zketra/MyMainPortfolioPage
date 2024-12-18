<template>
  <div class="father">
    <div class="content">

      <div class="box">
        <span>backlog</span>
        <div class="innerbox"></div>
      </div>

      <div class="box">
        <span>backlog</span>
        <div class="innerbox"></div>
      </div>

      <div class="box">
        <span>backlog</span>
        <div class="innerbox"></div>
      </div>

    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: "Skills",
})
</script>

<style scoped>
  .father {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    margin-bottom: 80px;
  }

  .content {
    display: flex;
    width: 1300px; /* updated width */
    align-items: center;
    justify-content: space-between;
  } 

  span{
    margin: 10px 0 0 20px;
  }

  .box { 
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    height: 500px;
    width: 33% /* in pixels=  */;
    border: 1px solid #444444;
    border-radius: 20px;
    box-sizing: border-box;
    padding: 10px;
    margin: 0 5px;
  }

  .innerbox {
    height: 400px;
    width: 100%;
    background-color: black;
    border: 1px solid #444444;
    border-radius: 20px;
  }
</style>