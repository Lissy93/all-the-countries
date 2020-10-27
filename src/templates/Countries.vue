<template>
  <div>
    <div v-for="edge in $static.allTheCountries.edges" :key="edge.node.idd.root+edge.node.idd.suffixes">
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
        idd {
          root
          suffixes
        }
      }
    }
  }
}
</static-query>