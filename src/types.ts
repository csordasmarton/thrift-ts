export const SPACE = ' ';
export const TAB = ' '
export enum INTEND_MODE {
  TAB,
  SPACE,
}
export type File = {
  filename: string,
  content: string,
}

export type CompileOptions = {
  tabSize?: number,
  spaceAsTab?: boolean
}