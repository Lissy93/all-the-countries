<template>
  <div :class="`${controls.display} countries-wrapper`">
    <div v-for="edge in $static.allTheCountries.edges" :key="edge.node.cca3">
      <Country
        :display="controls.display"
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
        :independent="edge.node.independent"
        :unMember="edge.node.unMember"
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
        tld
				callingCodes
        cca3
  			ccn3
        area
        landlocked
        independent
        unMember
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
  },
  props: {
    controls: Object,
  }
}
</script>

<style lang="scss">

@import '~/assets/styles/media-queries.scss';

.countries-wrapper {
  padding: 0.5rem 1rem;
  margin: 0.5rem auto;
  &.grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 1300px;
  }
  @include mobile-above {
    margin-top: 5rem; /* Fixed navbar on desktop */
  }
}
</style>