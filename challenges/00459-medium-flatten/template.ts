type Flatten<K extends any[], T extends any[] = []> = K extends [infer P, ...infer R]
    ? P extends any[]
    ? Flatten<[...P, ...R], T>
    : Flatten<R, [...T, P]>
    : T;