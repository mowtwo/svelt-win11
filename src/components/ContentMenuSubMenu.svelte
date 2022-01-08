<script lang="ts" context="module">
</script>

<script lang="ts">
  import { onMount } from "svelte";

  export let align: "left" | "right" = "left";
  export let offset = 0;
  export let outWidth = 0;
  $: offsetStyle = `${align}:${offset}px`;
  let menuThis: HTMLDivElement;
  onMount(() => {
    const { width } = menuThis.getBoundingClientRect();
    outWidth = width;
  });
</script>

<div class="menu" style={offsetStyle} bind:this={menuThis}>
  <slot />
</div>

<style lang="scss">
  .menu {
    position: absolute;
    z-index: 2;
    top: 0;
  }
</style>
