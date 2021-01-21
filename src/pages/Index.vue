<template>
  <Layout>
    <Countries :display="display"/>
  </Layout>
</template>

<script>
import Countries from '@/components/Countries';
import CountryEmojis from '@/utils/country-emojis';
import titleAnimation from '@/utils/title-update-animation';

export default {
  metaInfo: {
    title: 'All the Countries in the World'
  },
  components: {
    Countries,
  },
  data: () => {
    return {
      display: 'list',
    };
  },
  mounted: () => titleAnimation(CountryEmojis)
}
</script>

<style lang="scss">

div.controls {
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  align-items: center;
  margin: 0.2rem;
  padding: 0.2rem 0.5rem;
  background: var(--foreground);
  border-radius: 2px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  img {
    margin: 0.2rem;
    padding: 0.2rem;
    border-radius: 2px;
  }
}

</style>
