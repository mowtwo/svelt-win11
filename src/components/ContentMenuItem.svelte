<script lang="ts" context="module">
  let delayTimer: NodeJS.Timeout;
</script>

<script lang="ts">
  import resolveClass from "@/utils/resolveClass";
  import { createEventDispatcher, onMount } from "svelte";
  import MoreIcon from "../assets/svg/win11/more.svg";
  import ContentMenuSubMenu from "./ContentMenuSubMenu.svelte";

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
  export let showMoreTrigger: "hover" | "click" = "hover";
  /**
   * 当showMoreTrigger = hover时生效
   */
  export let showMoreDelay = 200;
  let itemThis: HTMLDivElement;

  let showMore = false;
  let subOffset = 0;
  let subMenuAlign: "left" | "right" = "left";
  let subMenuWidth = 0;
  onMount(() => {
    const { clientWidth } = itemThis;
    subOffset = clientWidth;
  });
  $: {
    // 不是最佳做法，可以考虑优化
    // 实现子菜单位置判断
    if (showMore && subMenuWidth > 0) {
      const { innerWidth } = window;
      const { width, x } = itemThis.getBoundingClientRect();
      if (innerWidth - (x + width) < subMenuWidth - 10) {
        console.log("right");
        subMenuAlign = "right";
      } else {
        console.log("left");
        subMenuAlign = "left";
      }
    }
  }
</script>

<div
  class="block"
  on:mouseleave={() => {
    clearTimeout(delayTimer);
    if (more && showMoreTrigger === "hover") {
      showMore = false;
    }
  }}
  on:mouseenter={() => {
    if (more && showMoreTrigger === "hover") {
      delayTimer = setTimeout(() => {
        showMore = true;
      }, showMoreDelay);
    }
  }}
>
  <div
    class="item"
    bind:this={itemThis}
    on:click={() => {
      if (more && showMoreTrigger === "click") {
        showMore = true;
      }
      dispatch("click", {
        text,
      });
    }}
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
    <ContentMenuSubMenu
      align={subMenuAlign}
      offset={subOffset}
      bind:outWidth={subMenuWidth}
    >
      <slot name="sub" />
    </ContentMenuSubMenu>
  {/if}
</div>

<style lang="scss">
  .block {
    .item {
      position: relative;
      z-index: 1;
      display: flex;
      margin: 6px;
      padding: 6px;
      align-items: center;
      overflow: hidden;
      border-radius: 4px;
      user-select: none;
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
  }
</style>
