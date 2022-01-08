<script lang="ts">
  import sleep from "@/utils/sleep";

  import type { ContentMenuCheckItem } from "@/vite-env";
  import { createEventDispatcher } from "svelte";
  import ContentMenuGroup from "./ContentMenuGroup.svelte";
  import ContentMenuItem from "./ContentMenuItem.svelte";
  import CheckIcon from "../assets/svg/win11/check.svg";

  interface Dispatch {
    itemClick: {
      item: ContentMenuCheckItem;
      list: ContentMenuCheckItem[];
      index: number;
      current: ContentMenuCheckItem[];
      action: string;
    };
  }

  export let list: ContentMenuCheckItem[] = [];
  export let value: ContentMenuCheckItem[] = [];
  export let hideDelay = 0;
  const dispatch = createEventDispatcher<Dispatch>();
</script>

<ContentMenuGroup>
  {#each list as item, i}
    <ContentMenuItem
      text={item.label ?? item.value}
      on:click={async () => {
        const index = value.findIndex((fi) => fi.value === item.value);
        let action = "select";
        if (index < 0) {
          value.push(item);
          action = "select";
        } else {
          const temp = [...value];
          temp.splice(index, 1);
          value = temp;
          console.log(temp, value);
          action = "remove";
        }
        await sleep(hideDelay);
        dispatch("itemClick", {
          item: item,
          index: i,
          list,
          current: value,
          action,
        });
      }}
    >
      <div class="svg" slot="icon">
        {#if value.findIndex((fi) => fi.value === item.value) >= 0}
          <CheckIcon />
        {/if}
      </div>
    </ContentMenuItem>
  {/each}
</ContentMenuGroup>

<style lang="scss">
  .svg {
    width: 100%;
    height: 100%;
    line-height: 100%;
  }
</style>
