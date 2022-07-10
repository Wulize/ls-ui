<template>
  <div id="app">
    <buttonPlat></buttonPlat>
    <link-plat></link-plat>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import buttonPlat from "./views/button.vue";
import linkPlat from "./views/link.vue";
@Component({
  components: { buttonPlat, linkPlat },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: stretch;
  & :nth-child(n) {
    margin-top: 20px;
  }
}
</style>
