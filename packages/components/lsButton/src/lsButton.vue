<template>
  <div class="lsButton">
    <button
      class="baseButton"
      :class="type !== '' ? `ls-button--${type}` : 'ls-button--primary'"
    >
      <slot></slot>
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { buttonType } from "../../../type";
@Component({ name: "lsButton" })
export default class lsButton extends Vue {
  @Prop() public type!: buttonType;
}
</script>

<style lang="scss">
.lsButton {
  .baseButton {
    width: 100px;
    height: 40px;
    border-radius: 10%;
    border: none;
    color: black;
    background-color: rgb(74, 130, 212);
  }
  .ls-button--primary {
    background-color: rgb(74, 130, 212);
  }
  .ls-button--success {
    background-color: rgb(92, 218, 180);
  }
  .ls-button--info {
    background-color: rgb(163, 191, 233);
  }
  .ls-button--warning {
    background-color: rgb(221, 219, 77);
  }
  .ls-button--danger {
    background-color: rgb(233, 56, 56);
  }
}
</style>
