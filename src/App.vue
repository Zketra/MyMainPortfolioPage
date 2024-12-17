<template>
   <div id="app">
    <NavHeader />
    <YBDHero />
    <HeroBackground />
    
    <!--
    -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavHeader from "./components/Header.vue";
import YBDHero from "./components/Hero.vue";
import HeroBackground from "./components/HeroBackground.vue";
/*
import About from "./components/About.vue";
import Skills from "./components/Skills.vue";
import Experience from "./components/Experience.vue";
import Projects from "./components/Projects.vue";
import Footer from "./components/Footer.vue";
*/

export default defineComponent({
  name: 'App',
  components: {
    NavHeader, YBDHero, HeroBackground,
  }
});
</script>

<style>
@import "../styles/main.css";
/*
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  */
</style>
