<template>
  <div :class="`${display} wrapper`">
    <div :class="`${display} country`">
      <div :class="`${display} country-main-info-wrapper`" v-on:click="toggle()">
        <h4 class="country-name">{{name}}</h4>
        <span class="line-contector"> - </span>
        <p class="country-capital">{{capital ? capital : '[NO CAPITAL]'}}</p>
      </div>
      <div :class="`${display} country-flag`" v-html="parseEmoji(flag)"></div>
    </div>
    <div v-on:click="toggle()" class="show-hide-button">
      {{detailsVisible ? '▲' : '▼'}}
      </div>
    <transition name="slide-fade">
    <div v-if="detailsVisible" class="additional-content">
      <p><b>Region: </b> {{region}} ({{subregion}})</p>
      <p><b>Languages: </b><span>{{makeTextList(languages)}}</span></p>
      <p><b>Currencies: </b><span>{{makeTextList(currencies)}}</span></p>
      <p><b>Domain Extension: </b><span>{{makeTextList(tld)}}</span></p>
      <p><b>Calling Codes: </b><span>{{makeTextList(callingCodes)}}</span></p>
      <p><b>Country Code (ISO 3166-1): </b><span>{{isoCodes.cca3}} / {{isoCodes.ccn3}}</span></p>
      <p><b>Land Size: </b><span>{{area}} km²</span></p>
      <p><b>Land Locked?: </b><span>{{landlocked? 'Yes' : 'No'}}</span></p>
      <p><b>UN Member: </b><span>{{unMember? 'Yes' : 'No'}}</span></p>
    </div>
    </transition>
  </div>
</template>


<script>

import twemoji from 'twemoji';

export default {
  name: 'Country',
  data: () => {
    return {
      detailsVisible: false,
    };
  },
  props: {
    display: String,
    name: String,
    flag: String,
    capital: String,
    region: String,
    subregion: String,
    tld: Array,
    callingCodes: Array,
    isoCodes: Object,
    languages: Array,
    currencies: Array,
    area: Number,
    landlocked: Boolean,
    independent: Boolean,
    unMember: Boolean,
},
  methods: {
    parseEmoji: (input) => twemoji.parse(input),
    toggle: function() { this.detailsVisible = !this.detailsVisible; },
    makeTextList: (arr) => {
      let result = '';
      arr.forEach((elem, index) =>
        result += (index + 1 < arr.length? `${elem}, `: elem)
      )
      return result;
    },
  }
}
</script>

<style lang="scss">


div.wrapper {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  flex-wrap: wrap;
  page-break-after: always;
	background: var(--foreground);
	border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);

  &.list {
    margin: 0.5rem auto;
    max-width: 650px;
  }

  &.grid {
    width: 200px;
    min-height: 140px;
    margin: 0.5rem;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    height: 90%;

    /* Show more info is disabled in grid view */
    .show-hide-button, .additional-content {
      display: none;
    }

  }
}

div.show-hide-button {
  padding: 0.5rem;
  color: var(--mid-grey);
  cursor: pointer;
  border-radius: 4px;
}

div.additional-content {
  flex-basis: 100%;
  background: var(--foreground);
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  margin: 0.5rem;
  padding: 0.5rem;
  transition: height,.08s linear;

  p {
    margin: 0.1rem;
    font-size: 0.9rem;
  }

}

div.country { // Country container
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  align-items: center;
  max-width: 90%;
  cursor: default;

  &.grid {
    flex-direction: column;
    width: 100%;
    text-align: center;
  }

  div.country-flag {
    img {
      height: 2.5rem;
      margin: 0 0.5rem;
    }
    &.grid {
      img {
        height: 3.5rem;
        margin: 0.5rem
      }
    }
  }

  div.country-main-info-wrapper {

      display: flex;
      flex-direction: initial;
      align-items: baseline;
      margin: 0 0.5rem;
      overflow: hidden;

      &.grid {
        flex-direction: column;
        .line-contector {
          display: none;
        }
        h4, p {
          width: 100%;
          text-align: center;
        }
      }

      h4.country-name {
        font-size: 1rem;
        margin: 0;
        text-overflow: ellipsis;
        overflow: hidden;
        // white-space: nowrap;
      }

      p.country-capital {
        font-size: 1rem;
        margin: 0;
        color: var(--mid-grey);
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }

      span.line-contector {
        margin: 0 0.5rem;
      }

      // Adjustments for text on mobile country list
      @media (max-width: 600px) {
        flex-direction: column;
        span.line-contector {
          display: none;
        }
        h4.country-name {
          margin-bottom: 0.1rem;
        }
      }
  }
}

/* Animated Transitions */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}

</style>