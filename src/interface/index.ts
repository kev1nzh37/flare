export type ErrorType =
  | 'typeError'
  | 'referenceError'
  | 'rangeError'
  | 'resourceError'
  | 'unknownError'

export type NetworkOrSrcEventTarget = HTMLImageElement &
HTMLLinkElement &
HTMLScriptElement

export interface OneErrorTypeMap {
  [key: string]: string
}
export interface OneErrorParams {
  message?: string | Event
  url: string | undefined
  lineNo?: number | undefined
  columnNo?: number | undefined
  errorObj?: Error | undefined
}
export interface ErrObj extends OneErrorParams {
  id?: number
  type: ErrorType
  srcUrl?: string | undefined
  tagName?: string
  path?: string[]
}

export type LocationHref = string

export interface Config {
  locationHref?: LocationHref
  auto: boolean
}
export type ErrorListRef = any

export type ReportSub = (errJsonData: string) => void
export type ErrorListener = (method: string, errObj?: ErrObj) => void

export interface InitObj {
  onReport: ReportSub
  config: Config
}

export interface Flare {
  init: (initObj: InitObj) => void
}

export type getOnerrorType = (message: string) => ErrorType
