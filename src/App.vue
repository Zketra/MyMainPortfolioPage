<template>
   <div id="app">
    <NavHeader />
    <YBDHero />
    <HeroBackground />
    <About />
    <Skills />
    <Achivements /> 
    <Contact />
    <Footer />
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
import Skills from "./components/Skills/Skills.vue";
import Achivements from "./components/Achivements/Achivements.vue";
import Contact from "./components/Contact/Contact.vue";
import Footer from "./components/Footer/Footer.vue";


export default defineComponent({
  name: 'App',
  components: {
    NavHeader,
    YBDHero, 
    HeroBackground, 
    About, 
    Skills, 
    Achivements, 
    Contact, 
    Footer,
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
