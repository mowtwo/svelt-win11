<script lang="ts">
  export let icon, name, position
  let style = `left: ${position[0]}px; top: ${position[1]}px`
</script>

<div class="dskApp container" {style}>
  <img width="36" src="{icon}" alt="icon" />
  <div class="appName">{name}</div>
</div>

<style lang="scss">

  .container {
    position: fixed;
    z-index: 999999999999;
    width: 120px;
    min-height: 100px;
    text-align: center;
    line-height: 20px;
  }
  .appName {
    text-align: center;
    color: #fafafa;
    margin-top: 4px;
    text-shadow: 0 0 4px rgba(0, 0, 0, 0.6);
  }
  .dskApp {
    font-size: 12.8px;
  }
</style>
