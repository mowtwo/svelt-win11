<script lang="ts">
    import Shortcut from "../components/Shortcut.svelte";
    import shortcutCollection from "../store/desktopShortcuts";
</script>
{#each shortcutCollection as {icon, name, position}}
    <Shortcut {icon} {name} {position}></Shortcut>
{/each}
