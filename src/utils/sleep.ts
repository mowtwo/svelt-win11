export default function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export function sleepSecond(s: number) {
  return sleep(s * 1000)
}