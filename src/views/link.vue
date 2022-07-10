<template>
  <div id="links">
    <ls-link type="primary" href="http://www.baidu.com">主要链接</ls-link>
    <ls-link type="success" href="http://www.baidu.com">成功链接</ls-link>
    <ls-link type="info" href="http://www.baidu.com">消息链接</ls-link>
    <ls-link type="warning" href="http://www.baidu.com">警告链接</ls-link>
    <ls-link type="danger" href="http://www.baidu.com">危险链接</ls-link>
    <ls-link type="ZZZZZZZ" href="http://www.baidu.com">异常type</ls-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class linkPlat extends Vue {}
</script>

<style>
#links {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
</style>