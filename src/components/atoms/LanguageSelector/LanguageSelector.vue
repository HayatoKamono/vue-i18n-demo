<template>
  <select @change="handleChange">
    <option value="ja">Japanese</option>
    <option value="en">English</option>
  </select>
</template>

<script>
export default {
  name: "LanguageSelector",
  props: {
    languages: {
      type: Array,
      default() {
        return ["ja", "en"];
      }
    },
    selectedLanguage: {
      type: String,
      default: "ja"
    }
  },
  methods: {
    handleChange(event) {
      this.$emit("change", event.target.value);
    }
  }
};
</script>

<style scoped></style>
