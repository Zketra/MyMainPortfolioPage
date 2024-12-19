<template>
  <div class="lineDiv">
    <img class="line" src="../../assets/images/Line2.png" alt="line">
  </div>
  <div class="father">
    <div class="content">
      <div class="left"></div>
      <div class="right">

        <div class="achivement">
          <div class="topPart">
            <span>work</span>
            <span>2024</span>
          </div>
          <h3>Lorex Media</h3>
          <span>Managing Director</span>
          <div class="thumbDiv">
            <img src="/src/assets/images/Achivements/lorex.png" alt="">
            <div class="desc">
              <p>A future company to do all online management from ads to website, from follow up auto-messaging to scraped-customer-search. Anything that is online, we manage it for our customers.</p>
              <div class="direct">
                <button>
                  check it out
                  <img src="/src/assets/icons/arrow.png" alt="arrow">
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    
  },
})
</script>

<style scoped>
  .lineDiv {
    display: flex;
    justify-content: center;
  }

  .line {
    /* width: 80vw; */
    height: 1817px;
    position: absolute;
    z-index: -1;
  }  

  .father {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    margin-bottom: 80px;
  }

  .content {
    display: flex;
    width: 70vw;
    align-items: center;
  }

  .right, .left {
    width: 50%;
  }
</style>