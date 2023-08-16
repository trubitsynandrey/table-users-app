<template>
  <div class="container">
    <app-button @emitClick="openModal" class="button_add">Add</app-button>

    <div class="table">
      <header-row :tableItem="{ name: 'name', phone: 'phone' }" @sort="sortUsersByKey" />
      <Row v-for="user in userItems" :key="user.id" :tableItem="user" />
    </div>

    <app-modal ref="modalRef">
      <form @submit.prevent="submitHandle">
        <div class="modal_content">
          <p>Fill the form to add user</p>
          <app-input
            @input="updateNameValue"
            :value="name"
            :errorMsg="errorName ? 'Enter the name' : ''"
            name="Name"
          />
          <app-input
            @input="updatePhoneValue"
            :value="phone"
            :errorMsg="errorPhone ? 'Enter the phone' : ''"
            name="Phone"
            type="number"
          />
          <app-select :options="options" @input="handleSelectInput" :value="option" />
          <app-button>Submit</app-button>
        </div>
      </form>
    </app-modal>
  </div>
</template>

<script>
import { OPTIONS, USERS } from './table/constants'
import Cell from './table/ui/cell.vue'
import HeaderRow from './table/ui/header-row.vue'
import Row from './table/ui/row.vue'
import {
  getKeyFromLocalStorage,
  mapUserToMaster,
  setKeyToLocalStorage,
  sortDataByKey
} from './table/utils/index'

export default {
  name: 'table-component',
  methods: {
    openModal() {
      this.$refs.modalRef.openPopup()
    },
    closeModal() {
      this.$refs.modalRef.closePopup()
    },
    updateNameValue(newValue) {
      this.errorName = false
      this.name = newValue
    },
    updatePhoneValue(newValue) {
      this.errorPhone = false
      this.phone = newValue
    },
    handleSelectInput(newValue) {
      this.option = newValue
    },
    submitHandle() {
      if (this.phone === '') {
        this.errorPhone = true
      }

      if (this.name === '') {
        this.errorName = true
      }

      if (this.name === '' || this.phone === '') {
        return
      }

      const userItem = {
        id: new Date().getTime().toString(),
        name: this.name,
        phone: this.phone,
        students: []
      }

      if (this.option) {
        this.userItems = mapUserToMaster(this.userItems, this.option.id, userItem)
      } else {
        this.userItems = [...this.userItems, userItem]
      }

      this.options = [...this.options, userItem]

      setKeyToLocalStorage(USERS, this.userItems)
      setKeyToLocalStorage(OPTIONS, this.options)

      this.name = ''
      this.phone = ''
      this.closeModal()
      this.option = undefined
    },
    sortUsersByKey(key) {
      if (this.userItems.length === 0) return

      this.userItems = sortDataByKey(this.userItems, key)
      setKeyToLocalStorage(USERS, this.userItems)
    }
  },
  data() {
    return {
      name: '',
      phone: '',
      option: undefined,
      userItems: [],
      options: [],
      errorName: false,
      errorPhone: false
    }
  },
  mounted() {
    const savedUsers = getKeyFromLocalStorage(USERS)
    const options = getKeyFromLocalStorage(OPTIONS)

    if (savedUsers && options) {
      this.userItems = savedUsers
      this.options = options
    }
  },
  components: { Cell, Row, HeaderRow }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
}

.button_add {
  align-self: flex-start;
}

.table {
  display: flex;
  flex-direction: column;
  border-left: 1px solid;
  border-right: 1px solid;
  border-color: var(--border-color);
  color: var(--border-color);
  width: 100%;
}

.table > div:last-child {
  border-bottom: 1px solid;
  border-color: var(--border-color);
}

.modal_content {
  max-width: 678px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-width: 300px;
  align-self: center;
}
</style>
