const INITONERROT = false
let OldOnerror: null | OnErrorEventHandlerNonNull = null

export const initOneError = (): void => installOneError()

function installOneError (): void {
  if (INITONERROT) {
    console.warn('onerror is inited.')
    return
  }

  OldOnerror = window.onerror
  console.log(OldOnerror)
  window.onerror = (message, url, lineNo, columnNo, errorObj) => {
    //     console.log(message, url, lineNo, columnNo, errorObj)
    console.log('meesage: ', message)
    console.log('url: ', url)
    console.log('lineNo: ', lineNo)
    console.log('columnNo: ', columnNo)
    console.log('errorObj: ', errorObj)
  }
}
