<template>
  <section id="work-together">
      <div>
          <h2>A Partnership in the making</h2>
          <article>
              <div class="form-element">
                  <label for="name">Your Name</label>
                  <input type="text" name="name" id="name">
              </div>
              <div class="form-element">
                  <label for="name">Your Email</label>
                  <input type="text" name="name" id="email">
              </div>
              <div class="form-element">
                  <label for="message">Your Message</label>
                  <textarea name="message" id="message" ></textarea>
              </div>
              <button type="submit"><span>Submit</span></button>
          </article>
      </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    h2 {
        margin:0 0 1em;
    }
    section {
        scroll-margin-top: 70px;
        background:#161616;
        text-transform: uppercase;        
        display: grid;
        place-items: center;
        min-height: 400px;
        padding:2em;
        > div {
            padding:2em;
            background:#fafafa;
            border-radius: 5px;
        }
    }
    article {
        display: flex;
        flex-direction: column;
        gap:1em;
    }
    .form-element {
        display: flex;
        flex-direction: column;
        gap:1em;
        text-align: left;
    }    
    input, textarea {
        padding:1rem;
        background:none;
        border:1px solid #161616;
        border-radius: 5px;
        outline-color: #648dc2;
        color:#161616;
        white-space: normal;
        font-family: inherit;
    }
    textarea {
        width:inherit !important;
    }
    #message {
        min-height:50px;
    }
    button {
        display: inline-block;
        border-radius: 3px;        
        text-transform: uppercase;
        font-size: 1rem;
        font-weight: bold;
        letter-spacing: 2px;
        padding:1.1rem 1.8rem;
        transition:all 0.8s cubic-bezier(0.075, 0.82, 0.165, 1);         
        color:#fff;
        user-select: none;
        background-color: #648dc2;
        border:1px solid #648dc2;
        cursor: pointer;
        transform: translateZ(0);
        span {
            transition:all 0.8s cubic-bezier(0.075, 0.82, 0.165, 1);         
            display: inline-block;
        }
        &:hover {
            color:#161616;
            background:#fff;
            span {
                transform:scale(1.1);
            }
        }
    }
</style>