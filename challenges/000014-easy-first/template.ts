type First<T extends any[]> = T extends [] ? never : T[0]

// type First<T extends any[]> = T extends [infer P, ...infer K] ? P : never;