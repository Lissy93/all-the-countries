<template>
  <div>
    <div v-for="edge in $static.allTheCountries.edges" :key="edge.node.cca3">
      <h2>{{ edge.node.name.common }}</h2>
    </div>
  </div>
</template>

<static-query>
query {
  allTheCountries: allCountries {
    edges {
      node {
        name {
          common
        }
        cca3
      }
    }
  }
}
</static-query>