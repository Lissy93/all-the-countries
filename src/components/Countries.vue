<template>
  <div>
    <div v-for="edge in $static.allTheCountries.edges" :key="edge.node.cca3">
      <h2>{{ edge.node.name.common + ' ' + edge.node.flag }}</h2>
      <p>{{ edge.node.capital }}</p>

      <span>{{ edge.node.flag + ' **' + edge.node.name.common + '**: ' + edge.node.capital }}</span>
    </div>
  </div>
</template>

<static-query>
query {
  allTheCountries: allCountries (sortBy: "common", order: ASC) {
    edges {
      node {
        name {
          common
        }
        cca3
        flag
        capital
      }
    }
  }
}
</static-query>

<script>
export default {

}
</script>