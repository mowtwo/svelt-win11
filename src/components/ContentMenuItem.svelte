<script lang="ts">
  import resolveClass from "@/utils/resolveClass";
  import { createEventDispatcher } from "svelte";
  import MoreIcon from "../assets/svg/win11/more.svg";

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
  export let iconAlwayShow = true;
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
  {#if iconAlwayShow}
    <div class="icon">
      <slot name="icon">
        {#if icon !== ""}
          <i class={resolveClass(iconGroup, `${iconPrev}-${icon}`)} />
        {/if}
      </slot>
    </div>
  {/if}
  <div class="content">
    <slot>
      <div class="text">{text}</div>
    </slot>
  </div>
  <div class="more">
    {#if more}
      <MoreIcon />
    {/if}
  </div>
</div>

{#if showMore}
  <div class="sub-menu">
    <slot name="sub" />
  </div>
{/if}

<style lang="scss">
  .item {
    display: flex;
    margin: 6px;
    padding: 6px;
    align-items: center;
    overflow: hidden;
    border-radius: 4px;
    &:hover {
      background-color: var(--menu-focus);
    }
    .icon {
      width: 16px;
      height: 16px;
      margin-right: 12px;
    }
    .content {
      flex: 1;
      overflow: hidden;
      .text {
        font-size: 12px;
        color: var(--text);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
    .more {
      width: 10px;
      height: 10px;
      font-size: 0;
      text-align: right;
    }
  }
</style>
