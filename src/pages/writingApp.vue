<template>
  <div>
    <Head/>
    <main class="writings">
      <section class="projectheading animate__animated animate__zoomInUp">
        <h1 class="">Writing</h1>
      </section>
      <section class="posts-head animate__animated animate__zoomInUp">
        <h2>Blog Post</h2>
        <table class="posts-table">
          <tbody class="">
          <tr class="">
            <td class=""><h3 class=""><a class="" href="https://g2tech.co/the-best-front-end-design-patterns/">The best Front-End Design Patterns</a> <!----></h3>
              <p class="post-publish">
                Published on Jan 7, 2024, on <a href="https://g2tech.co/">g2tech.co</a>.
                <span style="margin-left: 8px;">time: 10 min.</span>
              </p>
              <p data-v-0fea1b4d="" class="post-describe">Explore how these design patterns can revolutionize your front-end development,
                offering solutions to common challenges and elevating aspects like code organization, maintainability,
                and scalability. From the modular Module Pattern to the flexible MVVM architecture, delve into proven
                strategies for crafting efficient and responsive web applications in this discussion of common design
                patterns in the frontend domain.
              </p>
              <a href="https://g2tech.co/the-best-front-end-design-patterns/" class="seepost">see post ⟶</a>
            </td>
          </tr>
          </tbody>
        </table>
      </section>
    </main>
    <FooterApp/>
  </div>
</template>

<script>
import Head from '../components/HeaderApp.vue';
import FooterApp from '../components/FooterApp.vue'

export default {
  name: 'App',
  components: {
    Head,
    FooterApp
  }
}
</script>

<style scoped>
.writings{
  margin-top: 64px;
}
.projectheading{
  position: fixed;
  top: 55%;
  left: 10px;
  transform: translateY(-50%) rotate(90deg);
  font-family: 'Gotham XNarrow A', 'Gotham XNarrow B', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;
  text-transform: uppercase;
  font-weight: 500;
  font-style: normal;
  font-size: 5vmin;
 margin-bottom: 30px;
  color: #fff;
  z-index: 999;
}

.posts-head{
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  width: 520px;
}
.posts-head h2{
  font-size: 40px;
  font-family: Gotham XNarrow A,Gotham XNarrow B,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;
  text-transform: uppercase;
  font-weight: 500;
  font-style: normal;
  color: #fff;
}
.posts-table{
  border-collapse: collapse;
  margin-top: 32px;
}
.post-publish {
  line-height: 1.6;
  margin-bottom: 15px;
  font-family: Gotham XNarrow A,Gotham XNarrow B,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;
  color: white;
  font-size: 14px;
}
.post-describe{
  line-height: 1.6;
  margin-bottom: 15px;
  color: #b5b3b3;
  font-size: 17px;
}
.posts-table td:hover{
  filter: brightness(150%);
  transition: all .7s ease;
}
.posts-table td{
  border-bottom: 1px solid #4b4a4a;
  padding:0.8rem 0.4rem 0.8rem 0.4rem;
  text-align: left;
}
.posts-table td h3 {
  padding-bottom: 5px;
  font-size: 25px;
  font-family: Gotham XNarrow A,Gotham XNarrow B,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;
  text-transform: uppercase;
  font-weight: 500;
  font-style: normal;
  color: #fff;
}
.posts h3 a {
  color: #dcdbdb;
  font-weight: 400;
}
a, a:active, a:visited, p a, p a:active, p a:visited {
  text-decoration: none;
  color: #fff;
  font-weight: 700;
}

.seepost{
  display: flex;
  border: none;
  width: 110px;
  padding: 10px;
  margin-top:10px;
  margin-bottom: 10px;
  border-radius: 20px;
  color: #fff;
  align-items: center;
  background: #aa0753;
  right: 0;
  -webkit-box-shadow: 2px 5px 10px 2px #000;
  box-shadow: 2px 5px 10px 2px #000;
  font-family: Gotham XNarrow A,Gotham XNarrow B,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;
  -webkit-transition: all .25s ease;
  transition: all .35s ease;
  cursor: pointer;
  outline: none;
  text-transform: uppercase;
  letter-spacing: .15em;
  font-size: 13px;
}
.seepost:hover {
  margin-left: 10px;
  background:#111827;
  color: #aa0753;

}


@media (max-width: 780px) {
  .writings{
    margin-top: 35px;
    padding: 20px;
  }
  .posts-head{
    max-width: 345px;
  }
  .projectheading{
    display: flex;
    transform: none;
    position: static;
    justify-content: center;
    align-items: center;
    margin:0 auto 64px auto;
    outline-style: double;
    max-width: 345px;
  }
}
</style>
