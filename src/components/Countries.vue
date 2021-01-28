<template>
  <div :class="`${controls.display} countries-wrapper`">
    <div v-for="country in allCountries" :key="country.cca3">
      <Country
        :display="controls.display"
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
</template>

<script>

import Country from '~/components/Country'; // Country component
import RawCountriesData from '@/data/countries.yml'; // Raw Data
import formatRawData from '@/utils/formatRawData'; // Util function to clean raw data

export default {
  components: {
    Country,
  },
  props: {
    controls: Object,
  },
  data: () => {
    return {
      allCountries: formatRawData(RawCountriesData),
    };
  }
}
</script>

<style lang="scss">

.countries-wrapper {
  padding: 0.5rem 1rem;
  margin: 0.5rem auto;
  &.grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 1300px;
  }
}
</style>