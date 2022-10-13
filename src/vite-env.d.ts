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


type BackEndReturn<D = any> = {
  code: number,
  message?: string,
  msg?: string,
  data?: D
}


type PartialByKeys<T, K extends keyof T> = {
  [P in K]?: T[P]
} & Pick<T, Exclude<keyof T, K>>

type Simplify<T> = {
  [P in keyof T]: T[P]
}
