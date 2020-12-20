<template>
  <Layout>
    <div class="controls">
      <span>Layout</span>
      <g-image src="~/assets/icons/list.png" width="16" @click="display = 'list'" />
      <g-image src="~/assets/icons/grid.png" width="16" @click="display = 'grid'" />
    </div>
    <Countries :display="display"/>
  </Layout>
</template>

<script>
import Countries from '@/components/Countries';

export default {
  metaInfo: {
    title: 'Hello, world!'
  },
  components: {
    Countries,
  },
  data: () => {
    return {
      display: 'list',
    };
  },
}
</script>

<style lang="scss">

div.controls {
  position: absolute;
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
