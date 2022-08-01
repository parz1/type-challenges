type Equal<T, K> = T extends K ? (K extends T ? true : false) : false
type GetReadonlyKeys<T> = keyof {
  [K in keyof T as Equal<T[K], Readonly<T[K]>> extends true ? K : never]: T[K]
}
