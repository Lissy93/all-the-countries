<template>
    <div class="btn-group">
      <span class="label">{{label}}</span>

        <li @click="toggleMenu()" class="dropdown-toggle" v-if="selectedOption !== undefined">
          {{ selectedOption }}
          <span class="caret"></span>
        </li>

        <li @click="toggleMenu()" class="dropdown-toggle dropdown-toggle-placeholder" v-if="selectedOption === undefined">
          {{placeholderText}}
          <span class="caret"></span>
        </li>

        <ul class="dropdown-menu" v-if="showMenu">
            <li v-for="(option, idx) in options" :key="idx">
                <a href="javascript:void(0)" @click="updateOption(option)">
                    {{ option }}
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                selectedOption: '',
                showMenu: false,
                placeholderText: 'Please select an item',
            }
        },
        props: {
            options: Array,
            selected: {},
            placeholder: [String],
            label: [String],
            closeOnOutsideClick: {
              type: [Boolean],
              default: true,
            },
        },

        mounted() {
            this.selectedOption = this.selected;
            if (this.placeholder)
            {
                this.placeholderText = this.placeholder;
            }

            if (this.closeOnOutsideClick) {
              document.addEventListener('click', this.clickHandler);
            }
        },

        beforeDestroy() {
            document.removeEventListener('click', this.clickHandler);
        },

        methods: {
            updateOption(option) {
                this.selectedOption = option;
                this.showMenu = false;
                this.$emit('updateOption', this.selectedOption);
            },

            toggleMenu() {
              this.showMenu = !this.showMenu;
            },

            clickHandler(event) {
                const { target } = event;
                const { $el } = this;

                if (!$el.contains(target)) {
                  this.showMenu = false;
                }
            },
        }
    }
</script>

<style>

.btn-group {
  min-width: 160px;
  position: relative;
  display: inline-block;
  vertical-align: middle;
}
.btn-group a:hover {
  text-decoration: none;
}

.label {
  color: var(--mid-grey);
  font-size: 0.8rem;
}

.dropdown-toggle {
  color: var(--mid-grey);
  min-width: 160px;
  padding: 0.25rem;
  text-transform: none;
  font-weight: 300;
  margin-bottom: 7px;
  border: 0;
  border-bottom: 1px solid var(--mid-grey);
  transition: background 0s ease-out;
  float: none;
  box-shadow: none;
  border-radius: 0;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.dropdown-toggle:hover {
  background: var(--background);
  cursor: pointer;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  float: left;
  min-width: 160px;
  padding: 5px 0;
  margin: 2px 0 0;
  list-style: none;
  font-size: 14px;
  text-align: left;
  background-color: var(--background);
  border: 1px solid var(--darker-bg);
  border-radius: 4px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
  background-clip: padding-box;
}

.dropdown-menu > li > a {
  padding: 10px 30px;
  display: block;
  clear: both;
  font-weight: normal;
  line-height: 1.6;
  color: var(--text-color);
  white-space: nowrap;
  text-decoration: none;
}
.dropdown-menu > li > a:hover {
  background: var(--darker-bg);
  color: var(--text-color);
}

.dropdown-menu > li {
  overflow: hidden;
  width: 100%;
  position: relative;
  margin: 0;
}

.caret {
  width: 0;
  position: absolute;
  top: 2rem;
  height: 0;
  margin-left: -1.5rem;
  vertical-align: middle;
  border-top: 4px dashed;
  border-top: 4px solid \9;
  border-right: 4px solid transparent;
  border-left: 4px solid transparent;
  right: 10px;
}

li {
    list-style: none;
}
</style>