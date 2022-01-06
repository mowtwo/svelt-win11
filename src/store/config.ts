import { derived, writable } from "svelte/store";
import wallpaperLightImg from "@/assets/img0.jpg"
import wallpaperDarkImg from "@/assets/img1.jpg"


export const themeMode = writable<'light' | 'dark'>('light')

export const wallpaper = derived(themeMode, (t) => {
  if (t === 'dark') {
    return wallpaperDarkImg
  } else {
    return wallpaperLightImg
  }
})