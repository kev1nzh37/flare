export const isObj = (obj: any): boolean => {
  return typeof obj === 'object' && !!obj
}

export const isWindow = (): boolean => {
  return window !== undefined
}
