<template>
  <div>
    <h3 v-if="heading" :class="`heading-${display} group-heading`">{{ heading }}</h3>
    <div :class="`${display} countries-wrapper`">
      <div v-for="country in allCountries" :key="country.cca3">
        <Country
          :display="display"
          :name="country.name.common"
          :flag="country.flag"
          :capital="country.capital[0]"
          :region="country.region"
          :subregion="country.subregion"
          :tld="country.tld"
          :callingCodes="country.callingCodes"
          :isoCodes="{'cca3': country.cca3, 'ccn3': country.ccn3}"
          :languages="country.languages"
          :currencies="country.currencies"
          :area="country.area"
          :landlocked="country.landlocked"
          :independent="country.independent"
          :unMember="country.unMember"
        />
      </div>
    </div>
  </div>
</template>

<script>

import Country from '~/components/Country'; // Country component
import RawCountriesData from '@/data/countries.yml'; // Raw Data

export default {
  components: {
    Country,
  },
  props: {
    heading: String,
    display: String,
    allCountries: Array,
  },
}
</script>

<style lang="scss">

.countries-wrapper {
  padding: 0.5rem 1rem;
  margin: 0.5rem auto;
  &.grid {
    display: flex;
    flex-wrap: wrap;
    max-width: 1300px;
  }
}
h3.group-heading {
  display: block;
  font-size: 1.5rem;
  margin: 1rem auto 0.25rem auto;
  &.heading-grid { max-width: 1300px; }
  &.heading-list { max-width: 650px; }
}
</style>