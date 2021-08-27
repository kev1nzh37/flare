import { ReportSub } from './interface'
import { initListenr } from './error-observer'

let _onReport: ReportSub = sendErrReport

export function readySendErrReport (onReport: ReportSub): void {
  if (!onReport) {
    console.error('required onReport in auto mode.')
    return
  }

  _onReport = onReport
  watchTheError()
}

function sendErrReport (errJsonData: string): void {
  console.log(errJsonData)
}

function watchTheError (): void {
  initListenr((method, errObj) => {
    console.log('监听errlist, 获得消息了', method, errObj)

    if (method === 'add' && errObj !== null) {
      _onReport(JSON.stringify(errObj))
    }
  })
}
