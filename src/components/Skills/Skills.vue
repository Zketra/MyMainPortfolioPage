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
        <span>currently learning</span>
        <div class="innerbox">
          <Skillbox v-for="(skill, index) in skills.inProgress" :key="index" :name="skill.name" :logoPath="skill.logoPath" :textColor="skill.textColor" :borderColor="skill.borderColor" />
        </div>
      </div>

      <div class="box">
        <span>done</span>
        <div class="innerbox">
          <Skillbox v-for="(skill, index) in skills.done" :key="index" :name="skill.name" :logoPath="skill.logoPath" :textColor="skill.textColor" :borderColor="skill.borderColor" />
        </div>
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
          {name: "javascript", logoPath: "/src/assets/icons/Skills/js.png", textColor: "#F0DB4F", borderColor: "#F0DB4F"},
          {name: "rust", logoPath: "/src/assets/icons/Skills/rust.svg", textColor: "#F65D00", borderColor: "#F65D00"},
          {name: "c++", logoPath: "/src/assets/icons/Skills/c++.png", textColor: "#00599C", borderColor: "#00599C"},
          ],
          inProgress: [
            {name: "vue", logoPath: "/src/assets/icons/Skills/vue.svg", textColor: "#41B883", borderColor: "#41B883"},
            {name: "typescript", logoPath: "/src/assets/icons/Skills/ts.png", textColor: "#007ACC", borderColor: "#007ACC"},
          ],
          done: [
          {name: "python", logoPath: "/src/assets/icons/Skills/py.png", textColor: "#FFD040", borderColor: "#366C9A"},
          {name: "vim", logoPath: "/src/assets/icons/Skills/vim.svg", textColor: "#019733", borderColor: "#019733"},
          {name: "html", logoPath: "/src/assets/icons/Skills/html.webp", textColor: "#E44D26", borderColor: "#E44D26"},
          {name: "css", logoPath: "/src/assets/icons/Skills/css.svg", textColor: "#264DE4", borderColor: "#264DE4"},
          {name: "linux", logoPath: "/src/assets/icons/Skills/linux.png", textColor: "#FCC624", borderColor: "#ffffff"},
          {name: "arch", logoPath: "/src/assets/icons/Skills/arch.png", textColor: "#1793D1", borderColor: "#1793D1"},
          {name: "figma", logoPath: "/src/assets/icons/Skills/figma.png", textColor: "#F24E1E", borderColor: "#F24E1E"},
          {name: "git", logoPath: "/src/assets/icons/Skills/git.png", textColor: "#F05032", borderColor: "#F05032"},
          {name: "github", logoPath: "/src/assets/icons/github.svg", textColor: "#ffffff", borderColor: "#ffffff"},
          {name: "postgreSQL", logoPath: "/src/assets/icons/Skills/postgresql.png", textColor: "#336791", borderColor: "#336791"},

          
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
    align-content: flex-start;
    height: 400px;
    width: 100%;
    background-color: #0a0a0a;
    border: 1px solid #444444;
    border-radius: 20px;
    box-sizing: border-box;
    padding: 10px;
  }
</style>