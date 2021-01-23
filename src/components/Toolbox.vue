<template>
  <div :class="'controls-wrapper ' + (!controlsVisible? 'collapse': '')">

    <h3 class="controls-title" @click="controlsVisible = !controlsVisible">Filters</h3>

    <div :class="'controls ' + (!controlsVisible? 'controls-hidden': '')">
      <div class="control-section search">
        <span>Search</span>
        <input type="text" />
      </div>

      <div class="control-section filter">
        <span>Filter By</span>
        <input type="text" />
      </div>

      <div class="control-section language">
        <span>Language</span>
        <input type="text" />
      </div>

      <div class="control-section layout">
        <span>Layout</span>
        <g-image src="~/assets/icons/list.png" width="16" @click="updateDisplay('list')" />
        <g-image src="~/assets/icons/grid.png" width="16" @click="updateDisplay('grid')" />
      </div>
    </div>

  </div>
</template>


<script>

export default {
  name: 'Toolbox',
  methods: {
      updateDisplay(display) {
        this.$emit('update-display', display);
    },
    
  },
  data: () => {
    return {
      controlsVisible: false,
    }
  }
}
</script>

<style lang="scss">

@import '~/assets/styles/media-queries.scss';

  .controls-wrapper {
    display: flex;
    min-height: 2rem;
    margin: 0.2rem auto;
    padding: 0.2rem 0.5rem;
    background: var(--foreground);
    border-radius: 5px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);

    .controls {
      display: flex;
      &.controls-hidden {
        @media (max-width: 1240px) {
          display: none;
        }
      }
    }

    h3.controls-title {
      padding: 0.2rem 0.5rem;
      cursor: pointer;
    }

    
    .control-section {
      display: flex;
      align-items: center;
      border-right: 1px solid var(--darker-bg);
      margin-right: 0.5rem;

      input {
        width: 8rem;
        height: 1.5rem;
        margin: 0 0.5rem;
        padding: 0 0.5rem;
        background: var(--background);
        border: 1px solid var(--darker-bg);
        border-radius: 5px;
        color: var(--text-color);
        font-size: 1rem;
        font-family: "RobotoMono", courier, monospace;
      }

      img {
        margin: 0.2rem;
        padding: 0.2rem;
        border-radius: 2px;
      }
    }

    &.collapse {
      @media (max-width: 1240px) {
        width: 8rem;
        margin: 0 0 0 0.5rem;
      }
      @media (min-width: 990px) {
        position: absolute;
      }
    }

    @media (min-width: 1240px) {
      position: fixed;
      right: 0.5rem;
      top: 5rem;
      width: 15rem;
      flex-direction: column;
      .controls {
        flex-direction: column;
      }
      .control-section {
        margin: 0.5rem 0;
        border: none;
      }
    }

  }
</style>