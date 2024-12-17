<template>
    <div class="wings">
        <div class="cover"></div>
        <div class="elipse"></div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: "HeroBackground",
})
</script>

<style scoped>
.wings {
    position: absolute;
    top: 0;
    height: 100vh;
    width: 100vw;
    z-index: -1;
    display: flex;
    justify-content: center;
    align-items: center;
}

.cover {
    position: absolute;
    top: 0;
    height: 100vh;
    width: 100vw;
    -webkit-backdrop-filter: blur(132.6px) brightness(100%);
    backdrop-filter: blur(132.6px) brightness(100%);
    background-color: #10101003;
}

.elipse {
    height: 25vh;
    width: 50vw;
    background-color: #373737;
    border-radius: 100%;
}    
</style>