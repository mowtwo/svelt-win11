let current = 0
export default {
  get inc() { return current++ },
  get bottom() { return 0 },
  get mid() { return 9 },
  get top() { return 99 },
  get superTop() { return 999 },
  get fixTop() { return 9999 }
}