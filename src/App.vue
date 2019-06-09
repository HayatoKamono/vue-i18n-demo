<template>
  <div id="app">
    <header id="header">
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/contact">Contact</router-link>
      </div>
      <div id="languageSelector">
        <LanguageSelector :languages="['ja', 'en']" />
      </div>
    </header>
    <div id="main">
      <router-view />
    </div>
  </div>
</template>

<script>
import LanguageSelector from "./components/atoms/LanguageSelector";
export default {
  name: "App",
  components: {
    LanguageSelector
  }
};
</script>

<style lang="scss">
ul {
  padding: 0;
}
li {
  list-style-type: none;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
#header {
  display: flex;
  justify-content: space-between;
  padding: 30px;
}
#nav {
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
#main {
  text-align: center;
}
</style>
