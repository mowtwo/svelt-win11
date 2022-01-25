<script lang="ts">
  import resolveClass from "@/utils/resolveClass";

  import type { DesktopBarItem } from "@/vite-env";

  export let barItemList: DesktopBarItem[] = [];
  export let align: "left" | "center" = "center";
</script>

<div class="bar">
  <div class={resolveClass("item-list", align)}>
    {#each barItemList as item, i}
      {#if item.type === "app"}
        <div class="item app" />
      {:else if item.type === "click"}
        <div class="item click" />
      {:else}
        <div class="item link" />
      {/if}
    {/each}
  </div>
  <div class="right">
    <slot />
  </div>
</div>

<style lang="scss">
  .bar {
    height: 100%;
    background-color: var(--bar);
    backdrop-filter: saturate(3) blur(20px);
    transition: 0.3s ease;
    position: relative;
    .right {
      position: absolute;
      right: 0;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
</style>
