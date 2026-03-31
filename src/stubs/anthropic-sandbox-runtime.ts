// Stub for @anthropic-ai/sandbox-runtime - Anthropic internal package
// Provides types and no-op implementations for sandbox functionality

export interface Sandbox {
  start(): Promise<void>
  stop(): Promise<void>
  exec(cmd: string): Promise<{ stdout: string; stderr: string; exitCode: number }>
}

export interface SandboxOpts {
  runtime?: string
  image?: string
}

export function createSandbox(opts?: SandboxOpts): Sandbox {
  return {
    start: async () => {},
    stop: async () => {},
    exec: async (cmd: string) => ({ stdout: '', stderr: '', exitCode: 1 }),
  }
}

export interface FsReadRestrictionConfig {
  paths: string[]
}

export interface FsWriteRestrictionConfig {
  paths: string[]
}

export interface IgnoreViolationsConfig {
  commands?: string[]
  patterns?: string[]
}

export interface NetworkHostPattern {
  host: string
  port?: number
}

export interface NetworkRestrictionConfig {
  allow: string[]
  deny: string[]
}

export interface SandboxAskCallback {
  (message: NetworkHostPattern): Promise<boolean>
}

export interface SandboxDependencyCheck {
  errors: string[]
  warnings: string[]
}

export interface SandboxViolationEvent {
  type: string
  detail: any
}

export interface SandboxRuntimeConfig {
  image?: string
  runtime?: string
  command?: string[]
  network?: any
  filesystem?: any
  ignoreViolations?: any
  enableWeakerNestedSandbox?: boolean
  enableWeakerNetworkIsolation?: boolean
  ripgrep?: any
}

export const SandboxRuntimeConfigSchema = {
  parse: (input: any) => input,
}

export class SandboxViolationStore {
  addViolation() {}
  getViolations() { return [] }
}

export class SandboxManager {
  static async initialize(_config?: any, _askCallback?: any): Promise<void> {}
  static isSupportedPlatform(): boolean { return false }
  static checkDependencies(_config?: any): SandboxDependencyCheck { return { errors: ['sandbox not available'], warnings: [] } }
  static isSandboxingEnabled(): boolean { return false }
  static getFsReadConfig(): FsReadRestrictionConfig { return { paths: [] } }
  static getFsWriteConfig(): FsWriteRestrictionConfig { return { paths: [] } }
  static getNetworkRestrictionConfig(): NetworkRestrictionConfig { return { allow: [], deny: [] } }
  static getIgnoreViolations(): IgnoreViolationsConfig | undefined { return undefined }
  static getAllowUnixSockets(): string[] | undefined { return undefined }
  static getAllowLocalBinding(): boolean | undefined { return undefined }
  static getEnableWeakerNestedSandbox(): boolean | undefined { return undefined }
  static getProxyPort(): number | undefined { return undefined }
  static getSocksProxyPort(): number | undefined { return undefined }
  static getLinuxHttpSocketPath(): string | undefined { return undefined }
  static getLinuxSocksSocketPath(): string | undefined { return undefined }
  static waitForNetworkInitialization(): Promise<boolean> { return Promise.resolve(false) }
  static getSandboxViolationStore(): SandboxViolationStore { return new SandboxViolationStore() }
  static annotateStderrWithSandboxFailures(_command: string, stderr: string): string { return stderr }
  static cleanupAfterCommand() {}
  static async wrapWithSandbox(command: string, _binShell?: string, _customConfig?: any, _abortSignal?: any): Promise<string> { return command }
  static updateConfig(_config: any) {}
  static async reset() {}
}

export default {}
