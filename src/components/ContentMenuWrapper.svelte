<script lang="ts">
  import { onMount, tick, createEventDispatcher } from "svelte";

  import { fade } from "svelte/transition";

  interface Dispatch {
    menuShow: undefined;
  }

  export let menuZIndex = 9999;
  export let menuShow = false;

  const dispatch = createEventDispatcher<Dispatch>();

  let util = {
    hideMenu() {
      menuShow = false;
    },
    showMenu() {
      menuShow = true;
    },
    toggleMenu() {
      menuShow = !menuShow;
    },
    setMenuDisplay(s) {
      menuShow = !!s;
    },
  };

  let mousePoint = { x: 0, y: 0 };
  let wrapperThis: HTMLDivElement;
  let menuSize = {
    width: 0,
    height: 0,
  };
  const contextmenu = async (e: MouseEvent) => {
    const { clientX, clientY } = e;
    const { width, height } = menuSize;
    const { innerWidth, innerHeight } = window;
    const updatePoint = {
      x: clientX,
      y: clientY,
    };
    if (innerWidth - clientX < width) {
      updatePoint.x -= width;
    }
    if (innerHeight - clientY < height) {
      updatePoint.y -= height;
    }
    mousePoint = updatePoint;
    menuShow = true;
    dispatch("menuShow");
  };
  onMount(() => {
    mousePoint = {
      x: -999999,
      y: -9999999999,
    };
    menuShow = true;
    tick().then(() => {
      const { clientWidth, clientHeight } = wrapperThis;
      menuSize = {
        width: clientWidth,
        height: clientHeight,
      };
      mousePoint = {
        x: 0,
        y: 0,
      };
      menuShow = false;
    });
  });
</script>

<svelte:body
  on:click={() => {
    menuShow = false;
  }} />
<div class="wrapper" on:contextmenu={contextmenu}>
  <slot {util} />
</div>

{#if menuShow}
  <div
    class="menu-wrapper"
    style={`z-index:${menuZIndex};top:${mousePoint.y}px;left:${mousePoint.x}px;`}
    transition:fade={{ duration: 100 }}
    on:click|stopPropagation
    bind:this={wrapperThis}
  >
    <slot name="menu" />
  </div>
{/if}

<style lang="scss">
  .wrapper {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .menu-wrapper {
    position: fixed;
    width: 310px;
    overflow: hidden;
    border-radius: 8px;
    background-color: var(--panel);
    top: -10000px;
    left: -10000px;
    backdrop-filter: saturate(2) blur(20px);
  }
</style>
