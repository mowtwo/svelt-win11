export default function throttle<F extends (...args: any[]) => any, A extends Parameters<F> = Parameters<F>>(f: F, duration: number = 300) {
  let access = true
  return (...args: A) => {
    if (access) {
      access = false
      setTimeout(() => {
        f(...args)
        access = true
      }, duration)
    }
  }
}