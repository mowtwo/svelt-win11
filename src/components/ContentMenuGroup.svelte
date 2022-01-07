<script lang="ts">
</script>

<div class="group">
  <slot />
</div>

<style lang="scss">
  .group {
    overflow: visible;
    &:not(:last-child) {
      border-bottom: solid 1px var(--divider);
    }
  }
</style>
