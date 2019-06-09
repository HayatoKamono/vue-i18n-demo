<template>
  <div class="home">
    <h1>{{ $t("message.title", { pageName: "ホーム" }) }}</h1>
    <p class="description" v-html="$t('message.description')"></p>
    <p>{{ $tc("message.apple", 0) }}</p>
    <ul>
      <li>{{ $t("message.listItem[0]") }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>

<style scoped>
.description >>> .important {
  font-weight: bold;
}
</style>
