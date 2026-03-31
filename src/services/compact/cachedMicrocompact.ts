// Stub for cachedMicrocompact - gated behind CACHED_MICROCOMPACT feature flag

export interface CachedMCState {
  initialized: boolean
}

export interface CacheEditsBlock {
  start: number
  end: number
  content: string
}

export interface PinnedCacheEdits {
  block: CacheEditsBlock
  pinned: boolean
}

export function isCachedMicrocompactEnabled(): boolean {
  return false
}

export function isModelSupportedForCacheEditing(_model: string): boolean {
  return false
}

export function getCachedMCConfig(): Record<string, any> {
  return {}
}

export function getCachedMCState(): CachedMCState | null {
  return null
}

export function ensureCachedMCState(): CachedMCState {
  return { initialized: false }
}

export function getPinnedCacheEdits(): PinnedCacheEdits[] {
  return []
}

export function resetCachedMCState(): void {}

export default {}
