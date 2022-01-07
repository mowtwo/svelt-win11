<script lang="ts">
  export let icon
</script>

<div class="dskApp" id="my-computer">
  <img width="36" src="{icon}" />
  <div class="appName">My Computer</div>
</div>

<style lang="scss">

  #my-computer {
    position: fixed;
    z-index: 999999999999;
    left: 10px;
    top: 10px;
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
