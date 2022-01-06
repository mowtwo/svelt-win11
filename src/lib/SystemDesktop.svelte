<script lang="ts">
  import DesktopBar from "@/components/DesktopBar.svelte";
  import DesktopBackground from "@/components/DesktopBackground.svelte";
  import ContentMenuWrapper from "@/components/ContentMenuWrapper.svelte";
  import ContentMenuGroup from "@/components/ContentMenuGroup.svelte";
  import ContentMenuItem from "@/components/ContentMenuItem.svelte";
  export let wallpaper = "";

  export let menuShow = {
    desktop: false,
    bar: false,
  };

  const onMenuShow = (key: keyof typeof menuShow) => {
    return () => {
      const temp = { ...menuShow };
      for (const k in temp) {
        if (k !== key) {
          temp[k] = false;
        }
      }
      menuShow = temp;
    };
  };
</script>

<div class="desktop">
  <div class="fill">
    <ContentMenuWrapper
      bind:menuShow={menuShow.desktop}
      on:menuShow={onMenuShow("desktop")}
    >
      <DesktopBackground {wallpaper}>
        <slot />
      </DesktopBackground>
      <div class="menu" slot="menu">
        <ContentMenuGroup>
          <ContentMenuItem text="测试" />
        </ContentMenuGroup>
      </div>
    </ContentMenuWrapper>
  </div>
  <div class="bottom">
    <ContentMenuWrapper
      bind:menuShow={menuShow.bar}
      on:menuShow={onMenuShow("bar")}
    >
      <DesktopBar />
    </ContentMenuWrapper>
  </div>
</div>

<style lang="scss">
  .desktop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    .fill {
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
    }
    .bottom {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100vw;
      height: 48px;
    }
  }
</style>
