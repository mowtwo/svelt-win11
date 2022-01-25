<script lang="ts">
    import Shortcut from "../components/Shortcut.svelte";
    import shortcutCollection from "../store/desktopShortcuts";
</script>
{#each shortcutCollection as {icon, name, position, title}}
    <Shortcut {icon} {name} {position} {title}></Shortcut>
{/each}
