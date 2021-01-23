<template>
  <Layout>
    <Countries :controls="controls"/>
    <Toolbox @update-display="updateDisplay" />
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
      controls: {
        filter: '',
        groupBy: '',
        filterBy: '',
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
    }

  },
  // mounted: () => titleAnimation(CountryEmojis)
}
</script>

