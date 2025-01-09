<template>
    <div class="hero">
        <div class="middle">
            <span id="name">Yusuf B<span class="stylish">erk</span>an Dem<span class="stylish" >ir</span><span>b</span><span class="stylish">ag</span></span>
            <div id="titleDiv">
                <div class="miniTitleDiv">
                    <img src="../../assets/icons/location.svg" class="titleIcon" alt="Code Icon" />
                    <span>Heppenheim, Germany</span>
                </div>
                <div class="miniTitleDiv">
                    <img src="../../assets/icons/music.svg" class="titleIcon" alt="Music Icon" />
                    <span>Musician</span>
                </div>
                <div class="miniTitleDiv">
                    <img src="../../assets/icons/code.svg" class="titleIcon" alt="Developer Icon" />
                    <span>Back-End Developer</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: "YBDHero",
})
</script>

<style scoped>

.middle {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    flex-direction: column;
}

#name {
    font-family: var(--headerFont);
    color: var(--primary);
    font-size: 96px;
    margin-bottom: 16px;
}

.stylish {
    font-feature-settings: 'ss01', 'dlig', 'hlig';
}

#titleDiv {
    width: 50vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.miniTitleDiv {
    display: flex;
    align-items: center;
}

.titleIcon {
    width: 24px;
    height: 24px;
    margin-right: 8px;
}

@media (max-width: 1200px){
    #titleDiv {
        width: 80vw;
    }

    #name {
        text-align: center;
    }
}
</style>