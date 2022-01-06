export default function resolveClass(...classes) {
  return classes.filter(item => item != '').join(' ')
} 