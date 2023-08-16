<template>
  <div class="input">
    <label>{{ name }}</label>
    <input
      :value="value"
      :type="type"
      @input="$emit('input', $event.target.value)"
      class="input__input"
      :placeholder="placeholder"
    />
    <p v-show="errorMsg" class="input__error">{{ errorMsg }}</p>
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    value: String,
    placeholder: String,
    name: String,
    errorMsg: String,
    type: String
  }
}
</script>

<style scoped>
.input {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.input label {
  font-weight: bold;
  text-align: left;
}

.input__input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  font-size: 16px;
  width: 100%;
}

.input__input:focus:hover {
  border-color: #007bff;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}

.input__error {
  color: red;
  text-align: left;
}
</style>
