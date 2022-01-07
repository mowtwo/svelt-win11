<script lang="ts">
  import DesktopBar from "@/components/DesktopBar.svelte";
  import DesktopBackground from "@/components/DesktopBackground.svelte";
  import ContentMenuWrapper from "@/components/ContentMenuWrapper.svelte";
  import ContentMenuGroup from "@/components/ContentMenuGroup.svelte";
  import ContentMenuItem from "@/components/ContentMenuItem.svelte";
  import ViewIcon from "../assets/svg/win11/view.svg";
  import SortByIcon from "../assets/svg/win11/sortBy.svg";
  import RefreshIcon from "../assets/svg/win11/refresh.svg";
  import NewIcon from "../assets/svg/win11/new.svg";
  import DisplaySettingIcon from "../assets/svg/win11/displaySetting.svg";
  import PersonalizeIcon from "../assets/svg/win11/personalize.svg";
  import usePartialSvltComp from "@/utils/usePartialSvltComp";
  import ContentMenuPanel from "@/components/ContentMenuPanel.svelte";
  import type { ContentMenuCheckItem } from "@/vite-env";
  import ContentMenuRadioGroup from "@/components/ContentMenuRadioGroup.svelte";
  import sleep from "@/utils/sleep";
  export let wallpaper = "";

  export let menuShow = {
    desktop: false,
    bar: false,
  };

  const NoIconContentMenuItem = usePartialSvltComp(ContentMenuItem, {
    iconAlwayShow: false,
  });

  const onMenuShow = (key: keyof typeof menuShow) => {
    return () => {
      const temp = { ...menuShow };
      for (const k in temp) {
        if (k !== key) {
          temp[k] = false;
        }
      }
      menuShow = temp;
    };
  };
  const viewModes: ContentMenuCheckItem[] = [
    { value: "small", label: "小图标" },
    { value: "medium", label: "中等图标" },
    { value: "large", label: "大图标" },
  ];
  let viewMode = { value: "medium", label: "中等图标" };
</script>

<div class="desktop">
  <div class="fill">
    <ContentMenuWrapper
      bind:menuShow={menuShow.desktop}
      on:menuShow={onMenuShow("desktop")}
      let:util
    >
      <DesktopBackground {wallpaper}>
        <slot />
      </DesktopBackground>
      <div class="menu" slot="menu">
        <ContentMenuGroup>
          <ContentMenuItem text="布局方式" more showMoreTrigger="hover">
            <div class="svg" slot="icon">
              <ViewIcon />
            </div>
            <ContentMenuPanel slot="sub" width={188}>
              <ContentMenuRadioGroup
                list={viewModes}
                bind:value={viewMode}
                on:itemClick={async () => {
                  await sleep(100);
                  util.hideMenu();
                }}
              />
            </ContentMenuPanel>
          </ContentMenuItem>
          <ContentMenuItem text="排序方式" more>
            <div class="svg" slot="icon">
              <SortByIcon />
            </div>
          </ContentMenuItem>
          <ContentMenuItem text="刷新">
            <div class="svg" slot="icon">
              <RefreshIcon />
            </div>
          </ContentMenuItem>
        </ContentMenuGroup>
        <ContentMenuGroup>
          <ContentMenuItem text="新建" more>
            <div class="svg" slot="icon">
              <NewIcon />
            </div>
          </ContentMenuItem>
        </ContentMenuGroup>
        <ContentMenuGroup>
          <ContentMenuItem text="显示设置">
            <div class="svg" slot="icon">
              <DisplaySettingIcon />
            </div>
          </ContentMenuItem>
          <ContentMenuItem text="个性化">
            <div class="svg" slot="icon">
              <PersonalizeIcon />
            </div>
          </ContentMenuItem>
        </ContentMenuGroup>
        <ContentMenuGroup>
          <ContentMenuItem text="切换桌面" />
        </ContentMenuGroup>
      </div>
    </ContentMenuWrapper>
  </div>
  <div class="bottom">
    <ContentMenuWrapper
      bind:menuShow={menuShow.bar}
      on:menuShow={onMenuShow("bar")}
      menuWidth={220}
    >
      <DesktopBar />
      <div class="menu" slot="menu">
        <ContentMenuGroup>
          <NoIconContentMenuItem text="图标对齐方式" more />
        </ContentMenuGroup>
        <ContentMenuGroup>
          <NoIconContentMenuItem text="搜索" more />
          <NoIconContentMenuItem text="小组件" more />
        </ContentMenuGroup>
        <ContentMenuGroup>
          <NoIconContentMenuItem text="显示桌面" />
        </ContentMenuGroup>
      </div>
    </ContentMenuWrapper>
  </div>
</div>

<style lang="scss">
  .desktop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    .fill {
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      .menu {
        .svg {
          width: 100%;
          height: 100%;
        }
      }
    }
    .bottom {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100vw;
      height: 48px;
    }
  }
</style>
