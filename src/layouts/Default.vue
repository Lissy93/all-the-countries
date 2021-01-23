<template>
  <div class="layout">
    <header class="header fixed">
      <h1>
        <g-link to="/">🌍 {{ $static.metadata.siteName }}</g-link>
      </h1>
    </header>
    <slot/>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss">
@import '~/assets/styles/media-queries.scss';

body {
  margin:0;
  padding:0;
}

.main-content {
  max-width: 760px;
  margin: 0 auto;
  padding: 0 1rem;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding: 1rem;
  background: var(--foreground);
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 75%);

  background: #161728e6;
  background: -moz-linear-gradient(top,  #171828 50%, #161728e6 80%, #161728cc 100%);
  background: -webkit-linear-gradient(top,  #171828 50%,#161728e6 80%,#161728cc 100%);
  background: linear-gradient(to bottom,  #171828 50%,#161728e6 80%,#161728cc 100%);

  /** For desktop devices, the navbar is fixed */
  @include mobile-above {
    position: fixed;
    width: 100%;
    top: 0;
  }

  h1 a {
    color: var(--text-color);
    font-size: 2rem;
    font-size: unquote("min(3.5vw, 2rem)");
    text-decoration: none;
    font-variation-settings: 'wght' 200;
  }
}



</style>
