<script lang="ts">
  export let icon: string;
  export let name: string;
  export let position: number[];
  export let title: string;
  let style = `left: ${position[0]}px; top: ${position[1]}px`;
</script>

<div class="dskApp container" {style} {title}>
  <img width="36" src={icon} alt="icon" />
  <div class="appName">{name}</div>
</div>

<style lang="scss">
  img {
    margin-top: 16px;
  }
  .container {
    position: fixed;
    z-index: 1;
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
    cursor: default;
  }
  .dskApp {
    font-size: 12.8px;
    &:hover {
      background-color: rgba($color: #fff, $alpha: 0.6);
    }
  }
</style>
