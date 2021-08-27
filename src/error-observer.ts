import { ErrObj, ErrorListener } from './interface'

const errorListRef = []
let errorListenr: null | ErrorListener = null

export function addError (errObj: ErrObj): void {
  errorListRef.push(errObj)
  doChange('add', errObj)
}

export const initListenr = (callback: ErrorListener): void => {
  errorListenr = callback
}

export function resetError (): void {
  doChange('reset')
}

function doChange (method: string, errObj?: ErrObj): void {
  if (errorListenr) errorListenr(method, errObj)
}
