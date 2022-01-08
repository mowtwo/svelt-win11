<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import type { Unsubscriber } from "svelte/store";

  import Shortcut from "./components/Shortcut.svelte";
  import shortcutCollection from "./store/desktopShortcuts";
  import SystemDesktop from "./lib/SystemDesktop.svelte";
  import { themeMode, wallpaper } from "./store/config";
  import { getTheme } from "./store/theme.css";
  let themeCssVars = "";
  function provideTheme(t: "light" | "dark") {
    themeCssVars = getTheme(t);
    document.body.setAttribute("style", themeCssVars);
  }
  let unSubScribe: Unsubscriber;
  onMount(() => {
    unSubScribe = themeMode.subscribe((v) => {
      provideTheme(v);
    });
  });
  onDestroy(() => {
    unSubScribe?.();
  });
</script>

<svelte:window on:contextmenu={(e) => e.preventDefault()} />

<div class="dev-tools">
  <h4>DevTools</h4>
  <div>
    <button
      on:click={() => {
        if ($themeMode === "dark") {
          $themeMode = "light";
        } else {
          $themeMode = "dark";
        }
      }}>switch theme(now {$themeMode})</button
    >
  </div>
</div>
{#each shortcutCollection as {icon, name, position}}
  <Shortcut {icon} {name} {position}></Shortcut>
{/each}

<SystemDesktop wallpaper={$wallpaper}>
  <div class="app-container" />
</SystemDesktop>

<style lang="scss">
  .dev-tools {
    position: fixed;
    z-index: 999999999999;
    right: 10px;
    top: 0px;
    width: 120px;
    min-height: 100px;
    background-color: rgba($color: #fff, $alpha: 0.6);
    text-align: center;
    line-height: 20px;
    h4 {
      margin: 10px 0;
    }
  }
</style>
