import { Config, InitObj } from './interface'
import { isObj, isWindow } from './until'
import { readySendErrReport } from './report'
import { initOneError } from './onerror'

export function Init (initObj: InitObj): void {
  const { config, onReport } = initObj

  if (!isWindow()) {
    console.error('not in web')
    return
  }

  if (isObj(config) && isWindow) {
    const { locationHref } = config
    _config.locationHref = locationHref || window.location.href
  }

  readySendErrReport(onReport)
  initOneError()
}

export const _config: Config = {
  auto: false
}
