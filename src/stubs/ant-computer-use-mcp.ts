// Comprehensive stub for @ant/computer-use-mcp - Anthropic internal package
// All exports are stubs that return safe defaults

// Values
export const API_RESIZE_PARAMS = { maxWidth: 1280, maxHeight: 720 }
export const DEFAULT_GRANT_FLAGS: Record<string, boolean> = {}

// Functions
export function targetImageSize(): { width: number; height: number } { return { width: 1280, height: 720 } }
export function createComputerUseServer(): any { return null }
export function createComputerUseMcpServer(): any { return null }
export function getSentinelCategory(_appPath?: string): string { return 'unknown' }
export function bindSessionContext(_ctx: any): any { return {} }
export function buildComputerUseTools(_opts: any): any[] { return [] }
export function buildComputerUseMcpServer(_opts: any): any { return null }

// Types
export type ComputerExecutor = Record<string, any>
export type DisplayGeometry = Record<string, any>
export type FrontmostApp = Record<string, any>
export type InstalledApp = Record<string, any>
export type RunningApp = Record<string, any>
export type ScreenshotResult = Record<string, any>
export type ResolvePrepareCaptureResult = Record<string, any>
export type ComputerUseSessionContext = Record<string, any>
export type CuCallToolResult = Record<string, any>
export type CuPermissionRequest = Record<string, any>
export type CuPermissionResponse = Record<string, any>
export type ScreenshotDims = { width: number; height: number }
export type ComputerUseHostAdapter = Record<string, any>
export type Logger = Record<string, any>
export type CoordinateMode = string
export type CuSubGates = Record<string, any>

export default {}
