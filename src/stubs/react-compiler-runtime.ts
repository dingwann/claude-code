// Stub for react/compiler-runtime
// The React Compiler generates code that imports { c } from "react/compiler-runtime"
// The `c` function is called at the TOP of each compiled component function during render.
// It directly calls useRef to create/cache a memo array, and returns that array.
// Compiled code then checks `$[n] === Symbol.for("react.memo_cache_sentinel")` to know
// if a cache slot has been populated yet.

import { useRef } from 'react'

const SENTINEL = Symbol.for('react.memo_cache_sentinel')

export function c(size: number): any[] {
  const ref = useRef<any[]>(undefined as any)
  if (ref.current === undefined) {
    ref.current = new Array(size).fill(SENTINEL)
  }
  return ref.current
}

export default {} as any
