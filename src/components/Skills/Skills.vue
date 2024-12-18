<template>
  <div class="father">
    <div class="content">

      <div class="box">
        <span>backlog</span>
        <div class="innerbox">
          <Skillbox v-for="(skill, index) in skills.backlog" :key="index" :name="skill.name" :logoPath="skill.logoPath" :textColor="skill.textColor" :borderColor="skill.borderColor" />
        </div>
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
import { defineComponent} from 'vue'
import Skillbox from './skillComponent.vue'

export default defineComponent({
  name: "Skills",
  components: { Skillbox},
  data () {
    return {
      skills: {
        backlog: [
          {name: "vue", logoPath: "/src/assets/icons/Skills/vue.svg", textColor: "#41B883", borderColor: "#41B883"},
          {name: "python", logoPath: "/src/assets/icons/Skills/py.png", textColor: "#FFD040", borderColor: "#366C9A"},
        ],
        inProgress: [
          {}
        ],
        done: [
          {}
        ]
      }
    }
  }
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
    display: flex;
    flex-flow: row wrap;
    height: 400px;
    width: 100%;
    background-color: black;
    border: 1px solid #444444;
    border-radius: 20px;
  }
</style>