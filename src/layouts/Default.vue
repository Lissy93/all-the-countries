<template>
  <div class="layout">
    <header class="header">
      <h1>
        <g-link to="/">🌍 {{ $static.metadata.siteName }}</g-link>
      </h1>
    </header>
    <article class="main-content">

    </article>
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
  h1 a {
    color: var(--text-color);
    text-decoration: none;
    font-size: 2rem;
    font-variation-settings: 'wght' 200;
  }
}



</style>
