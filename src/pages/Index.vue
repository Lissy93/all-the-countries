<template>
  <Layout>
    <Toolbox
      @update-display="updateDisplay"
      @filter-countries="filterCountries"
      @filter-by="updateFilter"
      @group-by="updateGrouping"
      :display="display"
    />
    <Countries
      v-if="!groupBy || groupBy === 'None'"
      :display="display"
      :allCountries="allCountries"
    />
    <div v-else>
      <div v-for="(countries, index) in groupedCountries">
        <Countries
          :display="display"
          :allCountries="countries"
          :heading="index"
        />
      </div>
    </div>
  </Layout>
</template>

<script>
import Countries from '@/components/Countries';
import Toolbox from '@/components/Toolbox';
import CountryEmojis from '@/utils/country-emojis';
import titleAnimation from '@/utils/title-update-animation';
import RawCountriesData from '@/data/countries.yml'; // Raw Data
import formatRawData from '@/utils/formatRawData'; // Util function to clean raw data
import groupCountries from '@/utils/group-countries'; // Util function to clean raw data

export default {
  metaInfo: {
    title: 'All the Countries in the World'
  },
  computed: {
    allCountries: function() {
      return formatRawData(RawCountriesData, this.searchTerm, this.filterBy);
    },
    groupedCountries: function() {
      const groups = groupCountries(this.allCountries, this.groupBy.toLowerCase());
      return groups;
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
      groupBy: '',
      display: 'list',
    };
  },
  methods: {
    updateDisplay: function (displayMode) {
      if (displayMode == 'list' || 'grid') {
        this.display = displayMode;
      }
    },
    filterCountries(searchTerm) {
      this.searchTerm = searchTerm;
    },
    updateFilter(filterBy) {
      this.filterBy = filterBy;
    },
    updateGrouping(groupBy) {
      this.groupBy = groupBy;
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

