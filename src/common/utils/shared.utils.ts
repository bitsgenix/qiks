export const isUndefined = (obj: any): obj is undefined => typeof obj === 'undefined';
export const isNull = (val: any): val is null | undefined => isUndefined(val) || val === null;
