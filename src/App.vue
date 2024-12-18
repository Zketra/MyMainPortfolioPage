<template>
   <div id="app">
    <NavHeader />
    <YBDHero />
    <HeroBackground />
    <About />
    
    <!--
    -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavHeader from "./components/NavBar/Header.vue";
import YBDHero from "./components/HeroSection/Hero.vue";
import HeroBackground from "./components/HeroSection/HeroBackground.vue";
import About from "./components/About/About.vue";
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
    NavHeader, YBDHero, HeroBackground, About,
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
