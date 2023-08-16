<template>
  <transition name="fade">
    <div v-show="isOpen">
      <div class="modal" @click="closePopup"></div>
      <div class="modal__inners">
        <slot></slot>
        <div class="modal__close" @click="closePopup">X</div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Modal',
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    openPopup() {
      this.isOpen = true
    },
    closePopup() {
      this.isOpen = false
      this.$emit('close')
    },
    handleIsOpenChange(newIsOpen) {
      if (newIsOpen) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = ''
      }
    }
  },
  watch: {
    isOpen: 'handleIsOpenChange'
  }
}
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
}

.modal__close {
  width: 24px;
  height: 24px;
  position: absolute;
  top: 24px;
  right: 24px;
  cursor: pointer;
}

.modal__inners {
  position: fixed;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--form-color);
  color: black;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  border-radius: 8px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
