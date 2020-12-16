<template>
  <div class="countries-wrapper">
    <div v-for="edge in $static.allTheCountries.edges" :key="edge.node.cca3">
      <Country
        :name="edge.node.name.common"
        :flag="edge.node.flag"
        :capital="edge.node.capital[0]"
      />
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
				tld
				region
				subregion
				independent
				callingCodes
				cca2
  			ccn3
  			cca3
  			cioc
      }
    }
  }
}
</static-query>

<script>
import Country from '~/components/Country';

export default {
  components: {
    Country,
  }

}
</script>

<style>
.countries-wrapper {
  padding: 0.5rem 1rem;
}
</style>