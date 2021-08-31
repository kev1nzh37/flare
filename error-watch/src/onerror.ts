import { addError } from './error-observer'
import { ErrObj, NetworkOrSrcEventTarget } from './interface'
import { getOnerrorType } from './until'

let INITONERROR = false
/**
 * init all of error event
 **/
function installOneError(): void {
  if (INITONERROR) {
    throw new Error('onerror is inited.')
  }

  addOneErrorEvent()
  addPromiseEvent()
  addNetworkOrSrcEvent()

  INITONERROR = true
}

/**
 * check network reject or src reject
 **/
function addNetworkOrSrcEvent(): void {
  window.addEventListener(
    'error',
    (error: Event) => {
      console.log('捕获到异常：', error)

      const { tagName, src, href } = error.target as NetworkOrSrcEventTarget
      const path = error.composedPath().map((value) => {
        const { nodeName } = value as HTMLElement
        return nodeName || 'Window'
      })
      if (
        tagName !== undefined &&
        ['IMG', 'LINK', 'SCRIPT'].includes(tagName)
      ) {
        const networkOrSrcParams: ErrObj = {
          url: window.location.href,
          type: 'resourceError',
          srcUrl: src || href,
          tagName,
          path
        }

        console.log(path)
        computedErrorObject(networkOrSrcParams)
      }
      return true
    },
    true
  )
}

/**
 * check onerror callback of error
 **/
function addOneErrorEvent(): void {
  window.onerror = (message, url, lineNo, columnNo, errorObj) => {
    console.log(message, url, lineNo, columnNo, errorObj)
    const oneErrorParams: ErrObj = {
      message: errorObj?.message || message,
      lineNo,
      columnNo,
      url,
      type: getOnerrorType(message as string)
    }

    computedErrorObject(oneErrorParams)
  }
}

/**
 * check promise reject
 **/
function addPromiseEvent(): void {
  window.addEventListener(
    'unhandledrejection',
    (error) => {
      console.log('捕获到异常：', error)

      const { tagName, src, href } = error.target as NetworkOrSrcEventTarget
      if (
        tagName !== undefined &&
        ['IMG', 'LINK', 'SCRIPT'].includes(tagName)
      ) {
        const networkOrSrcParams: ErrObj = {
          url: window.location.href,
          type: 'resourceError',
          srcUrl: src || href,
          tagName
        }
        computedErrorObject(networkOrSrcParams)
      }
      return true
    },
    true
  )
}

/**
 * get all error and add
 * @param {OneErrorParams} oneErrorParams  error data from event
 **/
function computedErrorObject(oneErrorParams: ErrObj): void {
  // .....
  console.log(oneErrorParams)
  const errObj = Object.assign({}, oneErrorParams, {
    id: 11
  })
  addError(errObj)
}

export const initOneError = (): void => installOneError()
