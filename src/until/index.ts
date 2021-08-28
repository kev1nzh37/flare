import { ErrorType, OneErrorTypeMap } from '../interface'

const oneErrorTypeMap: OneErrorTypeMap = {
  referenceError: 'Uncaught ReferenceError',
  typeError: 'Uncaught TypeError',
  rangeError: 'Uncaught TypeError'
}

export const isObj = (obj: any): boolean => {
  return typeof obj === 'object' && !!obj
}

export const isWindow = (): boolean => {
  return window !== undefined
}

export const getOnerrorType = (message: string): ErrorType => {
  const typeKey: string | undefined = Object.keys(oneErrorTypeMap).find((i) =>
    message.startsWith(oneErrorTypeMap[i])
  )

  return (typeKey as ErrorType) || 'unknownError'
}
