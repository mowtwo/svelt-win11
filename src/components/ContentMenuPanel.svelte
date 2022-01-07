<script lang="ts">
  import { fade } from "svelte/transition";
  export let width: number | string = 310;
  $: menuWidthStyle = typeof width === "number" ? width + "px" : String(width);
</script>

<div
  class="menu-wrapper"
  style={`width:${menuWidthStyle}`}
  transition:fade={{ duration: 100 }}
  on:click|stopPropagation
>
  <slot />
</div>

<style lang="scss">
  .menu-wrapper {
    position: relative;
    // overflow: hidden;
    width: 310px;
    border-radius: 8px;
    background-color: var(--panel);
    backdrop-filter: saturate(2) blur(20px);
    padding: 0.02px 0;
  }
</style>
