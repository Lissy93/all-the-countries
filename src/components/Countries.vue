<template>
  <div class="countries-wrapper">
    <div v-for="edge in $static.allTheCountries.edges" :key="edge.node.cca3">
      <Country
        :name="edge.node.name.common"
        :flag="edge.node.flag"
        :capital="edge.node.capital[0]"
        :region="edge.node.region"
        :subregion="edge.node.subregion"
        :tld="edge.node.tld"
        :callingCodes="edge.node.callingCodes"
        :isoCodes="{'cca3': edge.node.cca3, 'ccn3': edge.node.ccn3}"
        :languages="edge.node.languages"
        :currencies="edge.node.currencies"
        :area="edge.node.area"
        :landlocked="edge.node.landlocked"
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
        flag
        capital
				region
				subregion
        languages
        currencies
        independent
        tld
				callingCodes
        cca3
  			ccn3
        area
        landlocked
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