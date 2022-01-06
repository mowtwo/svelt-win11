export default function debounce<F extends (...args: any[]) => any, A extends Parameters<F> = Parameters<F>>(f: F, duration: number = 300) {
  let timer;
  return (...args: A) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      f(...args)
      clearTimeout(timer)
    }, duration)
  }
}