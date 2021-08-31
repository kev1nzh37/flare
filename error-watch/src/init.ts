import { Config, InitObj } from './interface'
import { isObj, isWindow } from './until'
import { initSendErrReport } from './report'
import { initOneError } from './onerror'

export function init (initObj: InitObj): void {
  const { config, onReport } = initObj

  if (!isWindow()) {
    throw new Error('not in web')
  }

  if (isObj(config) && isWindow) {
    const { locationHref } = config
    _config.locationHref = locationHref || window.location.href
  }

  initSendErrReport(onReport)
  initOneError()
}

export const _config: Config = {
  auto: false,
  locationHref: undefined
}
