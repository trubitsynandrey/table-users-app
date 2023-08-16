<template>
  <div class="custom-select" :tabindex="tabindex" @blur="open = false">
    <div v-if="!isOptions" class="selected placeholder">{{ placeholder }}</div>
    <div v-else class="selected" :class="{ open: open }" @click="handleClickOption">
      {{ value ? value.name : 'Choose mentor' }}
    </div>
    <div class="items" :class="{ selectHide: !open }">
      <div
        v-for="(option, i) of options"
        :key="i"
        @click="
          open = false;
          $emit('input', option);
        "
      >
        {{ option.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true
    },
    default: {
      type: String,
      required: false,
      default: null
    },
    tabindex: {
      type: Number,
      required: false,
      default: 0
    },
    value: {
      type: Object
    }
  },
  data () {
    return {
      open: false,
      placeholder: 'There is nothing to choose from',
      isOptions: false
    }
  },
  computed: {
    noOptions () {
      return this.options.length === 0
    }
  },
  mounted () {
    this.$emit('input', this.value)
  },
  watch: {
    options: {
      handler (newOptions) {
        if (newOptions.length === 0) {
          this.isOptions = false
        } else {
          this.isOptions = true
        }
      },
      immediate: true
    }
  },
  methods: {
    handleClickOption () {
      if (!this.isOptions) return undefined
      this.open = !this.open
    }
  }
}
</script>

<style scoped>

.custom-select {
  position: relative;
  width: 100%;
  text-align: left;
  outline: none;
  height: 38px;
  line-height: 38px;
}

.custom-select .selected {
  background-color: white;
  border-radius: 6px;
  border: 1px solid #666666;
  color: black;
  padding-left: 1em;
  cursor: pointer;
  user-select: none;
}

.custom-select .selected.open {
  border: 1px solid var(--accent-color);
  border-radius: 6px 6px 0px 0px;
}

.custom-select .selected:after {
  position: absolute;
  content: "";
  top: 18px;
  right: 1em;
  width: 0;
  height: 0;
  border: 5px solid transparent;
  border-color: black transparent transparent transparent;
}

.custom-select .items {
  color: black;
  border-radius: 0px 0px 6px 6px;
  overflow: hidden;
  border-right: 1px solid var(--accent-color);
  border-left: 1px solid var(--accent-color);
  border-bottom: 1px solid var(--accent-color);
  position: absolute;
  background-color: #fff;
  left: 0;
  right: 0;
  z-index: 1;
  max-height: 200px;
  overflow-y: scroll;
}

.custom-select .items::-webkit-scrollbar {
  width: 8px;
}
.custom-select .items::-webkit-scrollbar-thumb {
  background-color: var(--form-color);
  border-radius: 6px;
}

.custom-select .items div {
  color: black;
  padding-left: 1em;
  cursor: pointer;
  user-select: none;
}

.custom-select .items div:hover {
  background-color: var(--accent-color);
}

.selectHide {
  display: none;
}
</style>
