<script lang="ts">
  import dayjs from "dayjs";
  import { onDestroy, onMount } from "svelte";
  import DesktopBarBlock from "./DesktopBarBlock.svelte";
  let time = dayjs(new Date());
  $: fmtTime = time.format("HH:mm");
  $: fmtDate = time.format("YYYY/M/D");
  let updater;
  onMount(() => {
    updater = setInterval(() => {
      time = dayjs(new Date());
    }, 1000);
  });
  onDestroy(() => {
    clearInterval(updater);
  });
</script>

<DesktopBarBlock on:click>
  <div class="time">{fmtTime}</div>
  <div class="date">{fmtDate}</div>
</DesktopBarBlock>

<style lang="scss">
  .time,
  .date {
    font-size: 11px;
    text-align: center;
    color: var(--text);
  }
</style>
