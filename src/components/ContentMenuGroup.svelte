<script lang="ts">
</script>

<div class="group">
  <slot />
</div>

<style lang="scss">
  .group {
    &:not(:last-child) {
      border-bottom: solid 1px var(--divider);
    }
  }
</style>
