<script lang="ts">
  import sleep from "@/utils/sleep";

  import type { ContentMenuCheckItem } from "@/vite-env";
  import { createEventDispatcher } from "svelte";
  import ContentMenuGroup from "./ContentMenuGroup.svelte";
  import ContentMenuItem from "./ContentMenuItem.svelte";

  interface Dispatch {
    itemClick: {
      item: ContentMenuCheckItem;
      list: ContentMenuCheckItem[];
      index: number;
      lastItem: ContentMenuCheckItem;
    };
  }

  export let list: ContentMenuCheckItem[] = [];
  export let value: ContentMenuCheckItem;
  export let hideDelay = 0;
  const dispatch = createEventDispatcher<Dispatch>();
</script>

<ContentMenuGroup>
  {#each list as item, i}
    <ContentMenuItem
      text={item.label ?? item.value}
      on:click={async () => {
        const lastItem = value;
        value = item;
        await sleep(hideDelay);
        dispatch("itemClick", {
          item: value,
          index: i,
          list,
          lastItem,
        });
      }}
    >
      <div class="dot-wrapper" slot="icon">
        <div class:dot={value.value === item.value} />
      </div>
    </ContentMenuItem>
  {/each}
</ContentMenuGroup>

<style lang="scss">
  .dot-wrapper {
    height: 100%;
    display: flex;
    align-items: center;
    .dot {
      width: 4px;
      height: 4px;
      border-radius: 4px;
      background-color: var(--text);
    }
  }
</style>
