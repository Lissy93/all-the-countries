<template>
  <div class="country">
    <div class="country-main-info-wrapper">
      <h4 class="country-name">{{name}}</h4>
      <span class="line-contector"> - </span>
      <p class="country-capital">{{capital}}</p>
    </div>
    <div class="country-flag" v-html="parseEmoji(flag)"></div>
  </div>
</template>


<script>

import twemoji from 'twemoji';

export default {
  name: 'Country',
  props: {
    name: String,
    flag: String,
    capital: String,
},
  methods: {
    parseEmoji: (input) => twemoji.parse(input)
  }
}
</script>

<style lang="scss">

div.country { // Country container

  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  align-items: center;
	margin: 0.5rem;
	background: var(--foreground);
	border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);


  div.country-main-info-wrapper {

      display: flex;
      flex-direction: initial;
      align-items: baseline;

      h4.country-name {
        margin: 0;
        display: inline;
        font-size: 1rem;
      }

      p.country-capital {
        font-size: 1rem;
      }

      span.line-contector {
        margin: 0 0.5rem;
      }
  }



  div.country-flag {
    img {
      height: 2.5rem;
      margin: 0 0.5rem;
    }
  }

}

</style>