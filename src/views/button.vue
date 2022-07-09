<template>
  <div id="buttons">
    <ls-button type="primary">确定</ls-button>
    <ls-button type="success">确定</ls-button>
    <ls-button type="info">确定</ls-button>
    <ls-button type="warning ">确定</ls-button>
    <ls-button type="danger ">确定</ls-button>
    <ls-button type="ZZZZZZZ">确定</ls-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class buttonPlat extends Vue {}
</script>

<style>
#buttons {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
</style>