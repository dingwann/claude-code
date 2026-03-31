// Polyfill for React's experimental useEffectEvent hook
// This provides a stable function reference that always calls the latest callback

import { useRef, useCallback } from 'react'

export function useEffectEvent<T extends (...args: any[]) => any>(callback: T): T {
  const ref = useRef<T>(callback)
  ref.current = callback
  return useCallback(((...args: any[]) => ref.current(...args)) as T, [])
}
