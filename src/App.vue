<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <buttonPlat></buttonPlat>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import buttonPlat from "./views/button.vue";
@Component({
  components: { buttonPlat },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
