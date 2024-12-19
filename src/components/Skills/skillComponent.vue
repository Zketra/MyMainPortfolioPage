<template>
  <div class="skill" :style="{ border: '1px solid ' + borderColor, color: textColor }">
    <img :src="logoPath" :alt="name" class="logo" />
    <span>{{ name }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SkillBox',
  props: {
    name: { type: String, required: true },
    logoPath: { type: String, required: true },
    textColor: { type: String, required: true },
    borderColor: { type: String, required: true },
  },  
  mounted() {
    console.log('Logo path:', this.logoPath);

  }
});
</script>

<style scoped>


.skill {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  margin: 5px;
  padding: 5px 15px;
  height: 20px;
}

.logo {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}
</style>
