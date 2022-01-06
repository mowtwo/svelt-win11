<script lang="ts">
  export let wallpaper = "";
  $: wallpaperStyle =
    wallpaper !== ""
      ? `background-image:url(${wallpaper})`
      : "background-color:#000";
</script>

<div class="background">
  <div class="wallpaper" style={wallpaperStyle} />
  <div class="container">
    <slot />
  </div>
</div>

<style lang="scss">
  .background {
    position: relative;
    width: 100%;
    height: 100%;
    .wallpaper {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      background-attachment: fixed;
      zoom: 1;
      transition: all 0.3s ease;
    }
  }
</style>
