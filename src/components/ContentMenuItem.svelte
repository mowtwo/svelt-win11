<script lang="ts">
  import resolveClass from "@/utils/resolveClass";
  import { createEventDispatcher } from "svelte";

  interface Dispatch {
    click: {
      text: string;
    };
  }

  const dispatch = createEventDispatcher<Dispatch>();

  export let text = "";
  export let icon = "";
  export let iconGroup = "iconfont";
  export let iconPrev = "icon";
  export let more = false;

  let showMore = false;
</script>

<div
  class="item"
  on:click={() =>
    dispatch("click", {
      text,
    })}
>
  <div class="icon">
    <slot name="icon">
      {#if icon !== ""}
        <i class={resolveClass(iconGroup, `${iconPrev}-${icon}`)} />
      {/if}
    </slot>
  </div>
  <div class="content">
    <slot>
      <div class="text">{text}</div>
    </slot>
  </div>
  {#if more}
    <div class="more">
      <i class="iconfont icon-more" />
    </div>
  {/if}
</div>

{#if showMore}
  <div class="sub-menu">
    <slot name="sub" />
  </div>
{/if}

<style lang="scss">
</style>
