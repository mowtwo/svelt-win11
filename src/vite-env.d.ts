/// <reference types="svelte" />
/// <reference types="vite/client" />

interface _DesktopBarItem {
  icon: string
  title: string
}

export interface DesktopBarLinkItem extends _DesktopBarItem {
  type: 'link'
  link: string
}

export interface DesktopAppBarItem extends _DesktopBarItem {
  type: 'app'
  opened: boolean
  show: boolean
  appEmit: (this: DesktopAppBarItem, appName: string, args: string[] | string[][]) => void
}

export interface DesktopClickBarItem extends _DesktopBarItem {
  type: 'click'
  onClick: (this: DesktopClickBarItem) => void
}

export type DesktopBarItem = DesktopBarLinkItem | DesktopAppBarItem | DesktopClickBarItem


export interface DesktopResizeable {
  resizeable: true
  minWidth: number
  minHeight: number
}

export interface DesktopUnResizeable {
  resizeable: false
}

export interface DesktopPosition {
  x: number
  y: number
}

export interface DesktopRect {
  width: number
  height: number
}

export interface DesktopLayout extends DesktopRect, DesktopPosition {
  zIndex: number
}

export type DesktopSizeObject = DesktopResizeable | DesktopUnResizeable

export type DesktopSizeRect = DesktopSizeObject & DesktopRect

export type DesktopWindow = DesktopLayout & DesktopSizeRect

export type CssColorVarKeys =
  | 'text'
  | 'focus-text'
  | 'placeholder'
  | 'primary'
  | 'focus-box'
  | 'panel'
  | 'panel-bottom'
  | 'border'
  | 'inactive'
  | 'divider'
  | 'window'
  | 'window-top'
  | 'window-footer'
  | 'active-bar'
  | 'bar'
  | 'menu-focus'
  | 'bar-focus'

export type CtorFirstParam<T extends abstract new () => any> = T extends abstract new (arg0: infer U, ...args: any[]) => any ? U : never

export interface ContentMenuCheckItem {
  value: string
  label?: string
}