/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// 环境变量 TypeScript的智能提示
interface ImportMetaEnv {
  VITE_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}


declare interface Window {
  [key: string]: any
}

/** 后端返回的类型 */
type BackEndReturn<D = any> = {
  code: number,
  message?: string,
  msg?: string,
  data?: D
}

/**  用于将某个key值为可选的 */
type PartialByKeys<T, K extends keyof T> = {
  [P in K]?: T[P]
} & Pick<T, Exclude<keyof T, K>>

/** 将其整合在一起 */
type Simplify<T> = {
  [P in keyof T]: T[P]
}
