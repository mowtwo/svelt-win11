<script lang="ts">
  import type { FlexAlign } from "@/vite-env";

  export let flexAlign: FlexAlign = "column";
</script>

<div class="block" style={`flex-flow: nowrap ${flexAlign}`} on:click>
  <slot />
</div>

<style lang="scss">
  .block {
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    user-select: none;
    height: calc(100% - 8px);
    display: flex;
    flex-flow: nowrap column;
    align-items: center;
    justify-content: center;
    padding: 0 8px;
    border-radius: 2.5px;
    &:hover {
      background-color: var(--bar-focus);
    }
  }
</style>
