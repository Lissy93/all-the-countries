<template>
  <Layout>
    <Toolbox
      @update-display="updateDisplay"
      @filter-countries="filterCountries"
      @filter-by="updateFilter"
      :controls="controls"
      :display="display"
    />
    <Countries
      :display="display"
      :allCountries="allCountries"
    />
  </Layout>
</template>

<script>
import Countries from '@/components/Countries';
import Toolbox from '@/components/Toolbox';
import CountryEmojis from '@/utils/country-emojis';
import titleAnimation from '@/utils/title-update-animation';
import RawCountriesData from '@/data/countries.yml'; // Raw Data
import formatRawData from '@/utils/formatRawData'; // Util function to clean raw data

export default {
  metaInfo: {
    title: 'All the Countries in the World'
  },
  computed: {
    allCountries: function() {
      return formatRawData(RawCountriesData, this.searchTerm, this.filterBy);
    },
  },
  components: {
    Countries,
    Toolbox,
  },
  data: () => {
    return {
      searchTerm: '',
      filterBy: '',
      display: 'list',
      controls: {
        search: 'all',
        groupBy: 'none',
        filterBy: 'none',
        language: 'en',
        display: 'list',
        theme: 'dark',
      },
    };
  },
  methods: {
    updateDisplay: function (displayMode) {
      if (displayMode == 'list' || 'grid') {
        this.display = displayMode;
      }
    },
    updateControls: function (key, value){
      this.controls[key] = value;
    },
    filterCountries(searchTerm) {
      this.searchTerm = searchTerm;
    },
    updateFilter(filterBy) {
      this.filterBy = filterBy;
    },
  },
  // mounted: () => titleAnimation(CountryEmojis)
}
</script>

<style scoped lang="scss">

@import '~/assets/styles/media-queries.scss';
  @include mobile-above {
    .layout {
      padding-top: 5.5rem; /* Fixed navbar on desktop */
    }
  }

</style>

