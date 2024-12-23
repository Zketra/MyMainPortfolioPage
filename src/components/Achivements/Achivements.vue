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
            <span style="color: #444444; text-decoration: underline;">work</span>
            <span style="color: #444444;">2024</span>
          </div>
          <div class="titleDiv">
            <h3>Lorex Media</h3>
            <span style="margin-top: -10px;">Managing Director</span>
          </div>
          <div class="thumbDiv">
            <img src="/src/assets/images/Achivements/lorex.png" alt="" class="thumb">
            <div class="desc">
              <p>A future company to do all online management from ads to website, from follow up auto-messaging to scraped-customer-search. Anything that is online, we manage it for our customers.</p>
             <br> 
              <div class="direct">
                <button onclick="location.href='https://www.lorexmedia.com'">
                  check it out&nbsp;
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
    margin-top: 200px ;
    width: 50%;
  }

  .achivement {
    position: relative;
    display: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #444444;
    border-radius: 20px;
    box-sizing: border-box;
    padding: 20px;
  }

  .thumb{
    width: 100%;
  }

  .topPart {
    display: flex;
    justify-content: space-between;
    width: 97%;
  }

  h3 {
    font-size: 40px;
    font-weight: 200;
    margin: 0;
  }

  .titleDiv {
    display: flex;
    flex-direction: column;
    align-items:normal;
    width: 100%;
    margin: 10px 0 20px 0;
  }
  
  .desc {
    position: absolute;
    bottom: 20px;
    padding: 0 30px 0 10px;
  }

  p{
    margin: 0;
  }

  .direct {
    display: flex;
    justify-content: flex-end;
    width: 100%;
  }


</style>