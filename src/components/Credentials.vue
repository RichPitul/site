<template>
  <section class="texture" id="some-credentials">
    <section>
      <article>
        <h3>Languages/Libraries and Frameworks</h3>
        <ul>
          <li>Javascript</li>
          <li>Electron, Vue, React</li>
          <li>Node, Capacitor</li>
          <li>PWA</li>
          <li>Webpack, Gulp, NPM</li>
          <li>PHP 5-8</li>
          <li>Cockpit CMS</li>
          <li>MySQL, PDO</li>
          <li>GIT, GitHub, Bitbucket</li>
          <li>CSS, SASS</li>
          <li>HTML, JSON, XML, SVG</li>
          <li>CockpitCMS</li>
        </ul>
      </article>
    </section>
    <section class="current">
      <article style="text-align: justify" >
        <h3 style="text-align: center">
          Lead Developer <span>Channel 1 Media Solutions</span>
        </h3>
        <p>
          My role at Channel 1 is diverse. It includes hiring and training new
          employees in all aspects of software development. I am the key liason
          between our clients and other members of the development team for any
          technical requirements of their project. From evaluating the
          possibilty of integrating client specified third party services;
          determing how long such a task would take; and finding alternatives
          that would be more cost effective. I am also identifing when such work
          could benefit the company in a more general way; either by enhancing
          our development processes or improving the products we sell overall.
        </p>
        <p>
          In addition to my role as a manager/mentor; my capacity to develop
          both front end and back end is unmatched, and includes database
          design, php development, rest api creation; html, css and js
          development. My preference is to use a Javascript framework for front
          end development such as VueJS or React; but I am also adept at vanilla
          js; and jquery if the needs arise.
        </p>
      </article>
    </section>
    <section>
      <article>
        <h3>Services and APIs</h3>
        <ul>
          <li>Tickets.com</li>
          <li>Braintree</li>
          <li>Stripe</li>
          <li>Segment, Rollbar</li>
          <li>DocRaptor</li>
          <li>Vimeo, YouTube</li>
          <li>Twitter / Facebook</li>
          <li>Google Servives</li>
          <li>Amazon Web Services</li>
          <li>Push Notifications</li>
          <li>MapBox</li>
          <li>Okta, OneLogin, SAML</li>
        </ul>
      </article>
    </section>
  </section>
</template>

<script>
export default {
  name: "Highlights",
};
</script>

<style lang="scss" scoped>
.texture {
  background: url("~@/assets/texture.jpg");
  background-attachment: fixed;
  background-size: cover;
}
section {
  display: grid;
  grid-template-columns: 1fr;
  overflow: hidden;
  background: rgba(#161616, 0.2);
  color: #fafafa;
  backdrop-filter: saturate(25%) blur(5px);
  @media (max-width: 599px) {
    &.current {
      order: -1;
    }
  }
  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 50vw);
  }
  @media (min-width: 1000px) {
    grid-template-columns: repeat(3, calc(100vw / 3));
  }

  article {
    padding: 2em;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
}
</style>