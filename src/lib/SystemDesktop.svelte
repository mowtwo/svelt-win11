<script lang="ts">
  import DesktopBar from "@/components/DesktopBar.svelte";
  import DesktopBackground from "@/components/DesktopBackground.svelte";
  export let wallpaper = "";
</script>

<div class="desktop">
  <div class="fill">
    <DesktopBackground {wallpaper}>
      <slot />
    </DesktopBackground>
  </div>
  <div class="bottom">
    <DesktopBar />
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
