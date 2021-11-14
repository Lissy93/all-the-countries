<template>
  <div :class="`controls-wrapper ${(!controlsVisible? 'collapse': '')} disp-${display}`">
    <h3 class="controls-title" @click="controlsVisible = !controlsVisible">Filters</h3>
    
    <div :class="`controls ${(!controlsVisible? 'controls-hidden ': ' ')}`">
      <div class="control-section search">
        <span>Search</span>
        <input type="text" v-on:keyup="updateSearchTerm($event.target.value)" />
      </div>

      <div class="control-section filter">
        <dropdown
            label="Filter By"
            :options="filterByItems" 
            :selected="'All'" 
            v-on:updateOption="filterBy" 
            :placeholder="'Filter By'">
        </dropdown>
      </div>

      <div class="control-section group">
        <dropdown
            label="Group By"
            :options="groupByItems" 
            :selected="'None'" 
            v-on:updateOption="groupBy" 
            :placeholder="'Group By'">
        </dropdown>
      </div>

      <div class="control-section language">
        <dropdown
            label="Language"
            :options="languageItems" 
            :selected="'en'" 
            v-on:updateOption="updateLanguage" 
            :placeholder="'Language'">
        </dropdown>
      </div>

      <div class="control-section layout">
        <span>Layout</span>
        <g-image src="~/assets/icons/list.png" width="20" @click="updateDisplay('list')" title="List" />
        <g-image src="~/assets/icons/grid.png" width="20" @click="updateDisplay('grid')" title="Grid" />
      </div>
    </div>

  </div>
</template>


<script>

import dropdown from '@/components/Dropdown';

export default {
  name: 'Toolbox',
  components: {
    dropdown
  },
  props: {
    display: String,
  },
  methods: {
      updateSearchTerm(searchTerm) {
        this.$emit('filter-countries', searchTerm);
      },
      updateDisplay(display) {
        this.$emit('update-display', display);
    },
      filterBy(selectedItem) {
        this.$emit('filter-by', selectedItem);
      },
      groupBy(selectedItem) {
        let emiitValue = '';
        if (selectedItem === 'Continent') emiitValue = 'region';
        if (selectedItem === 'Region') emiitValue = 'subregion';
        this.$emit('group-by', emiitValue);
      },
      updateLanguage(selectedItem) {
        console.log('Language Item Selected: ', selectedItem);
      },
  },
  data: () => {
    return {
      controlsVisible: false,
      filterByItems: ['All', 'Countries Only', 'Territories Only'],
      groupByItems: ['None', 'Continent', 'Region'],
      languageItems: ['en', 'fr', 'de'],
      object:  'Object Name',
    };
  },
}
</script>

<style lang="scss">

@import '~/assets/styles/media-queries.scss';

  .controls-wrapper {
    display: flex;
    align-items: center;
    min-height: 2rem;
    margin: 0.2rem auto;
    padding: 0.2rem 0.5rem;
    background: var(--foreground);
    border-radius: 5px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);

    h3.controls-title {
      padding: 0.2rem 0.5rem;
      cursor: pointer;
    }

    .control-section {
      display: flex;
      align-items: center;
      border-left: 1px solid var(--darker-bg);
      margin-left: 0.5rem;
      padding-left: 0.5rem;

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
        cursor: pointer;
        width: 1.2rem;
      }
      &.language { display: none; } // not yet implemented
    }


  /* Hide by default on small and medium screens */
  .controls {
      display: flex;
      flex-wrap: wrap;
      &.controls-hidden {
        @media (max-width: 1240px) {
          display: none;
        }
      }
    }

    /* On medium screens, display label on the side, on small screens, show it at the top */
    &.collapse {
      @media (max-width: 1240px) {
        width: 6rem;
        margin: 0 0 0 0.5rem;
      }
      @media (min-width: 990px) {
        position: absolute;
      }
    }

    /* On larger screens, display the toolbox on the side */
    @media (min-width: 1240px) {
      &.disp-list {
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
      &.disp-grid {
        position: relative;
      }
    }
  }
</style>