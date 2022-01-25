import { derived, writable } from "svelte/store";
import wallpaperLightImg from "@/assets/img0.jpg"
import wallpaperDarkImg from "@/assets/img1.jpg"

import Volume0Png from "@/assets/bar/audio0.png";
import Volume1Png from "@/assets/bar/audio1.png";
import Volume2Png from "@/assets/bar/audio2.png";
import Volume3Png from "@/assets/bar/audio3.png";


export const themeMode = writable<'light' | 'dark'>('light')

export const maxVolume = 100

export const volume = writable(100)

export const volumeIcon = derived(volume, (v) => {
  const p = v / maxVolume
  if (p <= 0) {
    return Volume0Png
  } else if (0 > 0 && p < .33) {
    return Volume1Png
  } else if (p >= .33 && p < .66) {
    return Volume2Png
  } else {
    return Volume3Png
  }
})

export const wallpaper = derived(themeMode, (t) => {
  if (t === 'dark') {
    return wallpaperDarkImg
  } else {
    return wallpaperLightImg
  }
})