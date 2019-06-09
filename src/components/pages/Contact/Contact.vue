<template>
  <div class="contact">
    <h1>{{ title }}</h1>
    <p class="description" v-html="description"></p>
    <p>{{ apple }}</p>
    <ul>
      <li>{{ listItem }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Contact",
  props: {
    title: {
      type: String,
      required: true
    },
    apple: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    listItem: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped lang="scss">
.description >>> .important {
  font-weight: bold;
}
</style>
