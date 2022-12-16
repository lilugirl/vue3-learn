<template>
  <div>
    <input type="text" :value="modelValue" @input="emitValue" />
    {{ modelValue }}
  </div>
</template>
<script>
  export default {
    props: {
      modelValue: String,
      modelModifiers: {
        default: () => ({}),
      },
    },
    emits: ["update:modelValue"],
    created() {
      console.log(this.modelModifiers);
    },
    methods: {
      emitValue(e) {
        let value = e.target.value;
        if (this.modelModifiers.capitalize) {
          value = value.charAt(0).toUpperCase() + value.slice(1);
        }
        this.$emit("update:modelValue", value);
      },
    },
  };
</script>
