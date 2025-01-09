<template>
  <div class="father">
    <div class="content">
      <h3>Contact Me</h3>
      <div class="wings">
        <div class="contact">
          <form ref="form" @submit.prevent="sendEmail">
            <div class="topPart">
              <input class="topIn" type="text" name="from_name" placeholder="name">
              <input class="topIn" type="email" name="from_email" placeholder="email">
            </div>
            <textarea class="txtarea" name="message" placeholder="message" ></textarea>
            <input class="btn" type="submit" value="send" >
          </form>
        </div>
        <div class="side">
          <br>
          feel free to contact me for any questions or suggestions. more of my socials:<br>
          <br>
          <pre>
{
  links:{
    email: '<a href="mailto:ybdemirbag@gmail.com">ybdemirbag@gmail.com</a>',
    github: '<a href="https://github.com/Zketra">Zketra</a>',
    instagram: '<a href="https://www.instagram.com/ybdemirbag/">zketra</a>',
  }
}
          </pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import emailjs from '@emailjs/browser';

export default defineComponent({
  methods: {
    sendEmail() {
      emailjs
        .sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID as string,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string,
          this.$refs.form as HTMLFormElement,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string
        )
        .then(
          () => {
          console.log('SUCCESS!');
          },
          (error) => {
          console.log('FAILED...', error.text);
          }
        );
    },
  },
});
</script>

<style scoped>
  h3 {
    font-size: 40px;
    font-weight: 200;
    margin: 0;
  }

  .father {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    margin-bottom: 80px;
  }

  .content {
    border: 1px solid #444444;
    border-radius: 20px;
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    width: 1344px; /* updated width */
    flex-flow: column;
  }

  .wings {
    display: flex;
    width: 100%;
    gap: 20px;
  }

  .contact {
    width: 50%;
    border: solid 1px #444444;
    border-radius: 20px;
    padding: 20px;
    box-sizing: border-box;
  }

  .side {
    width: 50%;
    white-space: pre-wrap;
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .topIn, .txtarea {
    background: #0A0A0A ;
    color: #dddddd;
    font-size: inherit;
    font: inherit;
  }

  :-ms-input-placeholder { /* Internet Explorer 10+ */
    font-style: italic;
    color: #444444;
}
  ::-webkit-input-placeholder { /* WebKit browsers */
     font-style: italic;
     color: #444444;
}

  .topIn {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    border: 1px solid #444444;
    border-radius: 10px;
  }

  .topPart {
    display: flex;
    gap: 10px;
    margin-bottom: 10px;
  }

  textarea {
    width: 100%;
    min-height: 350px;
    margin-bottom: 10px ;
    padding: 10px;
    box-sizing: border-box;
    border: 1px solid #444444;
    border-radius: 10px;
    resize: none;
  }

  .content h3{
    margin-bottom: 20px;
  }

  .btn{
    height: 46px;
    border-radius: 10px;
  }

  pre {
    font: inherit;
  } 

  pre a {
  font-style: italic;
  }
</style>
