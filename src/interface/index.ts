export interface ErrObj {
  id: number
}
export type LocationHref = string

export interface Config {
  locationHref?: LocationHref
  auto: boolean
}
export type ReportSub = (errJsonData: string) => void
export type ErrorListener = (method: string, errObj?: ErrObj) => void

export interface InitObj {
  onReport: ReportSub
  config: Config
}

export type ErrorListRef = any

export interface Flare {
  Init: (initObj: InitObj) => void
  config: Config
}
