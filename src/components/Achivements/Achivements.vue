// yes i know i wrote Achivements instead of Achievements but i am too lazy to change it now

<template>
  <div class="achivementsDiv">
    <div class="lineDiv">
      <img class="line" src="../../assets/images/Line2.png" alt="line">
    </div>
    <div class="father" id="achivements">
      <div class="content">
        <div class="left">
  
          <!-- this.resumePage -->
          <div class="achivement">
            <div class="topPart">
              <span style="color: #444444; text-decoration: underline;">project</span>
              <span style="color: #444444;">2025</span>
            </div>
            <div class="titleDiv">
              <h3>My Main Portfolio Page</h3>
              <span style="margin-top: -10px;">Full-Stack Developer</span>
            </div>
            <div class="descNonAbsouloute">
              <p>The portfolio page that you are currently on.</p>
              <ul>
                <li>Created with Vue.js, TypeScript</li>
                <li>Used Vite as a build tool</li>
                <li>Hosted on Hostinger</li>
              </ul>
              <br>
              <div class="direct">
                <button class="githubButton" onclick="window.open('https://github.com/Zketra/portfolioTake2')">
                  <img src="/src/assets/icons/github.svg" alt="github icon" class="github">
                </button>
                <button onclick="window.open('https://demirbags.com', '_blank')">
                  check it out&nbsp;
                  <img src="/src/assets/icons/arrow.png" alt="arrow">
                </button>
              </div> 
            </div>
          </div>
  
          <!-- Aerium -->
          <div class="achivement">
            <div class="topPart">
              <span style="color: #444444; text-decoration: underline;">work</span>
              <span style="color: #444444;">2023 - 2024</span>
            </div>
            <div class="titleDiv">
              <div class="dot dotPosRight"></div>
              <h3>Aerium Estate</h3>
              <span style="margin-top: -10px;">Back-End Developer</span>
            </div>
            <div class="thumbDiv">
              <img src="/src/assets/images/Achivements/aerium.png" alt="" class="thumbwhite">
              <div class="desc">
                <p>Created the whole Back-End from ground up, using Python, FastAPI, PostgreSQL, SQLAlchemy.</p> 
                <ul>
                  <li>Structured a ‘Tenant Based’ Database</li>
                  <li>Integrated authentication API’s like JWT</li>
                  <li>Made it scalable using Alembic</li>
                </ul>
                <p>They unfortunately shut down recently</p>
               <br> 
                <div class="direct">
                  <button onclick="window.open('https://web.archive.org/web/20240420083345/https://www.aerium.estate/#expand', '_blank')">
                    check it out&nbsp;
                    <img src="/src/assets/icons/arrow.png" alt="arrow">
                  </button>
                </div>
              </div>
            </div>
          </div>
          <!-- Portfolio -->
          <div class="achivement">
            <div class="topPart">
              <span style="color: #444444; text-decoration: underline;">project</span>
              <span style="color: #444444;">2022</span>
            </div>
            <div class="titleDiv">
              <div class="dot dotPosRight"></div>
              <h3>Portfolio Page</h3>
              <span style="margin-top: -10px;">Full-Stack Developer</span>
            </div>
            <div class="thumbDiv">
              <img src="/src/assets/images/Achivements/terminal.png" alt="" class="thumbterminal">
              <div class="desc">
                <p>Terminal based portfolio website.</p>
                <ul>
                  <li>Made with pure JavaScript</li>
                  <li>Allowed me to have a solid foundation in HTML and JavaScript.</li>
                </ul>
               <br> 
                <div class="direct">
                  <button class="githubButton" onclick="window.open('https://github.com/Zketra/ResumePage')">
                    <img src="/src/assets/icons/github.svg" alt="github icon" class="github">
                  </button>
                  <button onclick="window.open('https://terminal.demirbags.com', '_blank')">
                    check it out&nbsp;
                    <img src="/src/assets/icons/arrow.png" alt="arrow">
                  </button>
                </div>
              </div>
            </div>
          </div>
  
  
        </div>
  
        <div class="right">
  
          <!-- Lorex Media -->
          <div class="achivement">
            <div class="topPart">
              <span style="color: #444444; text-decoration: underline;">work</span>
              <span style="color: #444444;">2024</span>
            </div>
            <div class="titleDiv">
              <div class="dot dotPosLeft"></div>
              <h3>Lorex Media</h3>
              <span style="margin-top: -10px;">Managing Director</span>
            </div>
            <div class="thumbDiv">
              <img src="/src/assets/images/Achivements/lorex.png" alt="" class="thumbblue">
              <div class="desc">
                <p>A future company to do all online management from ads to website, from follow up auto-messaging to scraped-customer-search. Anything that is online, we manage it for our customers.</p>
               <br> 
                <div class="direct">
                  <button onclick="window.open('https://www.lorexmedia.com', '_blank')">
                    check it out&nbsp;
                    <img src="/src/assets/icons/arrow.png" alt="arrow">
                  </button>
                </div>
              </div>
            </div>
          </div>
  
          <!-- Sawix -->
          <div class="achivement">
            <div class="topPart">
              <span style="color: #444444; text-decoration: underline;">work</span>
              <span style="color: #444444;">2023</span>
            </div>
            <div class="titleDiv">
              <div class="dot dotPosLeft"></div>
              <h3>Sawix Studio</h3>
              <span style="margin-top: -10px;">Website Designer</span>
            </div>
            <div class="thumbDiv">
              <img src="/src/assets/images/Achivements/sawix.png" alt="" class="thumbpurple">
              <div class="desc">
                <p>Learnt the basics of website designing using Figma, Wordpress and Webflow that became the groundwork of my designing skills that i still use today.</p>
               <br> 
                <div class="direct">
                  <button onclick="window.open('https://www.sawix.de', '_blank')">
                    check it out&nbsp;
                    <img src="/src/assets/icons/arrow.png" alt="arrow">
                  </button>
                </div>
              </div>
            </div>
          </div>
  
          <!-- 2D Game -->
          <div class="achivement">
            <div class="topPart">
              <span style="color: #444444; text-decoration: underline;">project</span>
              <span style="color: #444444;">2018</span>
            </div>
            <div class="titleDiv">
              <div class="dot dotPosLeft"></div>
              <h3>2D Adventure Game</h3>
              <span style="margin-top: -10px;">Developer</span>
            </div>
            <div class="thumbDiv">
              <img src="/src/assets/images/Achivements/game.png" alt="" class="thumbgreen">
              <div class="desc">
                <p>Developed a Zelda-like game with a team of 3. </p>
                <ul>
                  <li>Learned Unity and C# </li>
                  <li>Built a base to how to work with a team and use Git</li>
                  <li>Upgraded my designing skills </li>
                </ul>
                <p>Since it has been a long time i unfortunately do not have the files</p>
               <br> 
                <div class="direct">
                  <button class="unbtn" >
                    check it out&nbsp;
                    <img src="/src/assets/icons/arrowdark.png" alt="arrow">
                  </button>
                </div>
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
    height: 100%;
    width: 100vw;
    display: flex;
    justify-content: center;
    position: relative;
  }

  .line {
      position: absolute;
      transform: translate(-50%, -50%);
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
  }

  .right, .left {
    margin-top: 230px ;
    width: 50%;
  }

  .right {
    margin-left: 20px;
  }

  .left{
    margin-right: 20px ;
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
    margin-bottom: 10px; /* reduced margin-bottom */
  }

  .github {
    fill: #ffffff;
    width: 20px;
    height: 20px;
  }

  .githubButton {
    width: 30px;
    margin-right: 10px; 
    border-radius: 50%;
    padding: 0;
  }

  .thumbblue{
    width: 100%;
    box-shadow: 0 -20px 50px -25px rgba(21, 42, 113, 0.5);
  }
  .thumbpurple{
    width: 100%;
    box-shadow: 0 -20px 50px -25px rgba(86, 14, 182, 0.3);
  }
  .thumbgreen{
    width: 100%;
    box-shadow: 0 -20px 50px -25px rgba(23, 110, 43, 0.5);
  } 
  .thumbterminal{
    width: 100%;
    box-shadow: 0 -20px 50px -25px rgba(49, 49, 77, 0.5);
  }
  .thumbwhite{
    width: 100%;
    box-shadow: 0 -20px 50px -25px rgba(255, 255, 255, 0.3);
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

  .dot {
    position: absolute;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: #ffffff;
    top: 65px;
  }

  .dotPosLeft {
    left: -28px;
  }

  .dotPosRight {
    right: -28px;
  }
  
  .desc {
    position: absolute;
    bottom: 20px;
    padding: 0 30px 0 10px;
  }

  .descNonAbsouloute {
  width: 100%;
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