# 临时文档

> 这里是项目内部分已完成模块的临时功能文档

## 组件

### 右键菜单

#### ContentMenuWrapper

创建菜单包裹容器，被包裹的元素右键时会弹出右键菜单，但是必须传递slot=menu时才生效。

```typescript
interface ContentMenuWrapper {
    props:{
        menuZIndex?:number; // 引用组件时，传递进来的尽量使用src/store/zIndex.ts下定义好的
        menuShow?:show;// 默认false，推荐bind
        menuWidth?:number|string;// 默认310，传递number则单位为px，字符串目前并不会检验是否合法，仅支持css支持的大小单位
    };
    dispatch:{
        menuShow:()=>void;
    };
    slots:{
        default?:SvelteComponent[];// 要渲染的组件
        menu?:SvelteComponent[];// 要渲染的菜单列表组件
    };
    lets:{
        util:{// 对slot释放的方法
            hideMenu:()=>void; // 隐藏菜单
            showMenu:()=>void; // 显示菜单
            toggleMenu:()=>void; // 切换菜单显示状态
            setMenuDisplay:(s:boolean)=>void; // 设置显示状态
        };
    };
};
```

#### ContentMenuPanel

菜单面板组件，主要提供菜单的样式部分，被**ContentMenuWrapper**引用

```typescript
interface ContentMenuPanel {
    props:{
        width?:number|string;// 默认310，传递number则单位为px，字符串目前并不会检验是否合法，仅支持css支持的大小单位
    };
    slots:{
        default?:SvelteComponent[];// 要渲染的菜单列表组件
    };
};
```

#### ContentMenuGroup

菜单组合组件，提供菜单列表分组功能

```typescript
interface ContentMenuGroup {
    slots:{
        default?:SvelteComponent[];// 要渲染的菜单列表项组件
    };
};
```

#### ContentMenuItem

菜单列表项组件

```typescript
interface ContentMenuItem {
    props:{
        text?:string;// 显示的文字，没有slot=default时显示
        /**
         * 注意：iconfont目前尚未真正添加，仅作预留
         */
        icon?:string;// 显示的左侧图标，采用iconfont的形式，仅需传递icon的名字，没有slot=icon时显示
        iconGroup?:string;// iconfont的主类名，默认为iconfont
        iconPrev?:string;// iconfont的前缀，默认为icon
        iconAlwayShow?:boolean;// 左侧icon的位置是否必须显示，目前实现上有问题，目前实现实际效果为控制icon是否显示，待定修改，默认true
        more?:boolean;// 是否显示右侧的子级菜单，会控制小图标跟实际显示，默认false
        showMoreTrigger:'hover'|'click';// 子级菜单的显示触发条件，hover为鼠标放上去显示，click为点击显示，默认为hover
        showMoreDelay:number;// 显示菜单延迟出现时间，单位为ms，仅在showMoreTrigger=hover时生效，默认为200
    };
    dispatch:{
        click:(text:string)=>void;// 点击事件
    };
    slots:{
        default?:SvelteComponent[];// 菜单文字
        sub?:SvelteComponent[];// 子菜单
        icon?:SvelteComponent[];// 图标
    };
};
```

#### ContentMenuSubMenu

子级菜单，抽离是为了更好实现子菜单出现位置判断

```typescript
interface ContentMenuSubMenu {
    props:{
        align?:'left'|'right';// 子菜单出现的位置，推荐bind，默认left
        offset?:number;// 子菜单相对于上级菜单项的位置
        outWidth?:number;// 子菜单渲染时宽度，推荐bind，为了方便计算子菜单位置释放
    };
    slots:{
        default?:SvelteComponent[];// 真正要渲染的子菜单列表
    };
};
```

#### ContentnMenuRadioGroup

封装好的单选菜单列表组合

```typescript
interface ContentnMenuRadioGroup {
    props:{
        list?:ContentMenuCheckItem[];// 菜单列表
        value:ContentMenuCheckItem;// 单选的值，必须bind
    };
    dispatch:{
      itemClick:(out:{
          item: ContentMenuCheckItem;
          list: ContentMenuCheckItem[];
          index: number;
          lastItem: ContentMenuCheckItem;
      })=>void;  
    };
};
interface ContentMenuCheckItem {
  value: string;
  label?: string;
};
```

