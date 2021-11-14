<template>
  <Layout>
    <Toolbox @update-display="updateDisplay" @filter-countries="filterCountries" :controls="controls" />
    <Countries :controls="controls" :searchTerm="searchTerm" />
  </Layout>
</template>

<script>
import Countries from '@/components/Countries';
import Toolbox from '@/components/Toolbox';
import CountryEmojis from '@/utils/country-emojis';
import titleAnimation from '@/utils/title-update-animation';

export default {
  metaInfo: {
    title: 'All the Countries in the World'
  },
  components: {
    Countries,
    Toolbox,
  },
  data: () => {
    return {
      searchTerm: '',
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
        this.controls.display = displayMode;
      }
    },
    updateControls: function (key, value){
      this.controls[key] = value;
    },
    filterCountries(searchTerm) {
      this.searchTerm = searchTerm;
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

