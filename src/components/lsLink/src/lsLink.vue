<template>
  <div class="ls-link-cover">
    <a
      :href="href"
      class="ls-link"
      :class="type !== '' ? `ls-link--${type}` : 'ls-link--default'"
    >
      <slot class="link-text"></slot>
    </a>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { buttonType } from "../../type";
@Component({ name: "lsLink" })
export default class lsLink extends Vue {
  @Prop() public type!: buttonType;
  @Prop() public href?: string;
}
</script>
<style lang="scss">
.ls-link-cover {
  .ls-link {
    color: rgb(74, 130, 212);
    text-decoration-line: none;
    &:hover {
      text-decoration-line: underline;
    }
  }
  .ls-link--default {
    color: rgb(130, 130, 131);
  }
  .ls-link--primary {
    color: rgb(74, 130, 212);
  }
  .ls-link--success {
    color: rgb(92, 218, 180);
  }
  .ls-link--info {
    color: rgb(163, 191, 233);
  }
  .ls-link--warning {
    color: rgb(221, 219, 77);
  }
  .ls-link--danger {
    color: rgb(233, 56, 56);
  }
}
</style>