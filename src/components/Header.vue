<template>
    <div class="nav">
        <div class="inside">
            <div id="leftNav">
                <a href="https://www.demirbags.com" class="logo">D</a>
            </div>
            <div id="rightNav">
                <a href=".about" class="navLink">about</a>
                <a href=".skills" class="navLink">skills</a>
                <a href=".achivements" class="navLink">achievement</a>
                <a href=".contact" class="navLink">contact</a>
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
    position: absolute;
    top: 0; /* Align to the top of the page */
    left: 50%; /* Center horizontally */
    transform: translateX(-50%); /* Offset by 50% of its width to center it */
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%; /* Optional: to make the navbar span the full width */
}

.inside {
    width: 70vw; /* Keeps content within a constrained width */
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-family: var(--headerFont);
    font-size: 48px;
    font-feature-settings: 'ss01';
}

.navLink {
    margin-right: 32px;
}
</style>