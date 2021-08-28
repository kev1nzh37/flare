import { ReportSub } from './interface'
import { initListenr } from './error-observer'

let _onReport: ReportSub = sendErrReport

/**
 * init send service, if not have onReport, use default method
 * @param {ReportSub} onReport error callback
 **/
export function initSendErrReport (onReport: ReportSub): void {
  if (onReport) _onReport = onReport
  watchTheError()
}

/**
 * default send error method
 * @param {string} errJsonData
 **/
function sendErrReport (errJsonData: string): void {
  console.log(errJsonData)
}

/**
 * listen error observer
 **/
function watchTheError (): void {
  initListenr((method, errObj) => {
    console.log('监听errlist, 获得消息了', method, errObj)

    if (method === 'add' && errObj !== null) {
      _onReport(JSON.stringify(errObj))
    }
  })
}
