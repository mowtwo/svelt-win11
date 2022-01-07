import type { CtorFirstParam } from "@/vite-env";
import type { SvelteComponent } from "svelte";

export default function usePartialSvltComp<T extends SvelteComponent, U extends new (...args: any[]) => T = new (...args: any[]) => T>
  (C: U, prevProps: Partial<CtorFirstParam<U>['props']>): U {
  //@ts-ignore
  return class DC extends C {
    constructor(options: CtorFirstParam<U>) {
      const { props, ...noPropsOptions } = options
      super({
        props: {
          ...prevProps,
          ...props,
        },
        ...noPropsOptions
      })
    }
  }
}