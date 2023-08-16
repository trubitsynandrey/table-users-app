<script>
import Button from '../components/button/button.vue'
import Input from '../components/input/input.vue'
import Modal from '../components/modal/modal.vue'
import Select from '../components/select/select.vue'
import Cell from './table/ui/cell.vue'
import HeaderRow from './table/ui/header-row.vue'
import Row from './table/ui/row.vue'
import { mapUserToMaster, sortDataByKey } from './table/utils/index.js'

export default {
  name: 'Table',
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

      const tableItem = {
        id: new Date().getTime().toString(),
        name: this.name,
        phone: this.phone,
        students: []
      }

      if (this.option) {
        this.tableItems = mapUserToMaster(this.tableItems, this.option.id, tableItem)
      } else {
        this.tableItems = [...this.tableItems, tableItem]
      }

      this.options = [...this.options, tableItem]

      localStorage.setItem('users', JSON.stringify(this.tableItems))
      localStorage.setItem('options', JSON.stringify(this.options))

      this.name = ''
      this.phone = ''
      this.closeModal()
      this.option = undefined
    },
    sortUsersByKey(key) {
      if (this.tableItems.length === 0) return

      this.tableItems = sortDataByKey(this.tableItems, key)
      localStorage.setItem('users', JSON.stringify(this.tableItems))
    }
  },
  data() {
    return {
      name: '',
      phone: '',
      option: undefined,
      tableItems: [],
      options: [],
      errorName: false,
      errorPhone: false
    }
  },
  mounted() {
    const savedUsers = localStorage.getItem('users')
    const options = localStorage.getItem('options')

    if (savedUsers && options) {
      this.tableItems = JSON.parse(savedUsers)
      this.options = JSON.parse(options)
    }
  },
  components: { Cell, Button, Modal, Input, Select, Row, HeaderRow }
}
</script>

<template>
  <div class="container">
    <Button @emitClick="openModal" class="button_add">Add</Button>

    <div class="table">
      <HeaderRow :tableItem="{ name: 'name', phone: 'phone' }" @sort="sortUsersByKey" />
      <Row v-for="item in tableItems" :key="item.id" :tableItem="item" />
    </div>

    <Modal ref="modalRef">
      <form @submit.prevent="submitHandle">
        <div class="modal_content">
          <p>Fill the form to add user</p>
          <Input
            :value="name"
            @input="updateNameValue"
            name="Name"
            :errorMsg="errorName ? 'Enter the name' : ''"
          />
          <Input
            :value="phone"
            @input="updatePhoneValue"
            name="Phone"
            :errorMsg="errorPhone ? 'Enter the phone' : ''"
            type="number"
          />
          <Select :options="options" @input="handleSelectInput" :value="option" />
          <Button>Submit</Button>
        </div>
      </form>
    </Modal>
  </div>
</template>

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
