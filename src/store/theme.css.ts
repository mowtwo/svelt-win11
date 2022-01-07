import type { CssColorVarKeys } from "@/vite-env"

export const light: Record<CssColorVarKeys, string> = {
  text: '#111',
  'focus-text': '#222',
  placeholder: '#777',
  primary: '#0067c0',
  "focus-box": 'rgba(0,0,0,.1)',
  panel: 'hsla(0,0%,94.9%,0.9)',
  "panel-bottom": 'rgba(0,0,0,0.033)',
  border: '#aaa',
  inactive: '#858585',
  divider: 'hsla(0,0%,80%,.3333333333333333)',
  window: '#fff',
  "window-top": '#edf2fe',
  "window-footer": '#f5f5f5',
  "active-bar": 'hsla(0,0%,100%,0.67)',
  bar: 'hsla(0,0%,95.3%,0.85)',
  "menu-focus": 'rgba(0,0,0,0.08)',
  "bar-focus": 'hsla(0,0%,100%,0.9)'
}

export const dark: Record<CssColorVarKeys, string> = {
  text: '#eee',
  'focus-text': '#fff',
  placeholder: '#aaa',
  primary: '#4cc2ff',
  "focus-box": 'rgba(255,255,255,.1)',
  panel: 'rgba(36,36,36,0.8)',
  "panel-bottom": 'rgba(0,0,0,0.2)',
  border: '#444',
  inactive: '#858585',
  divider: 'hsla(0,0%,80%,.3333333333333333)',
  window: '#191919',
  "window-top": '#19212e',
  "window-footer": '#1c1c1c',
  "active-bar": 'hsla(0,0%,100%,0.1)',
  bar: 'rgba(32,32,32,0.75)',
  "menu-focus": 'hsla(0,0%,100%,0.08)',
  "bar-focus": 'hsla(0,0%,100%,0.1)'
}

const resolveCssVar = (name: string, value: string) => {
  return `--${name}:${value};`
}

const mapResolve = (rc: Record<string, string>) => {
  const res: string[] = []
  for (const key in rc) {
    res.push(resolveCssVar(key, rc[key]))
  }
  return res.join('')
}


export const getTheme = (type: 'light' | 'dark') => {
  switch (type) {
    case 'dark': return mapResolve(dark)
    default: return mapResolve(light)
  }
}