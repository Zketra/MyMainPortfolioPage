<template>
    <div class="nav">
        <div class="inside">
            <div id="leftNav">
                <a href="https://www.demirbags.com"><img src="../../assets/icons/Logo.png" alt="Logo" class="logo"></a>
            </div>
            <div id="rightNav">
                <a href="#About" class="navLink">about</a>
                <a href="#skills" class="navLink">skills</a>
                <a href="#achivements" class="navLink">achievement</a>
                <a href="#contact" class="navLink">contact</a>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: "NavHeader",
})
</script>


<style scoped>
.nav {
    position: fixed;
    width: 100vw;
    top: 0;
    padding: 16px 0;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    /* Style
    backdrop-filter: blur(10px);
     */

    mask: linear-gradient(black, black, transparent);
    backdrop-filter: blur(8px);

}

.inside {
    width: 70vw; /* Keeps content within a constrained width */
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    width: 50px;
}

.navLink {
    margin-right: 32px;
}
</style>