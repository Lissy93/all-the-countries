<template>
  <Layout>
    <Countries />
  </Layout>
</template>

<script>

import Countries from '@/templates/Countries';

export default {
  metaInfo: {
    title: 'Hello, world!'
  },
  components: {
    Countries,
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
