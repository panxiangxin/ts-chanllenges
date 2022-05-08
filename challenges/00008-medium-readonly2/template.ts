type MyReadonly2<T, K extends keyof T = keyof T> = {
    //遍历 T 中的 key 值 当 key 存在 K 中时 never 处理 也就是 Exclude 处理
    [Key in keyof T as Key extends K ? never : Key] : T[Key]
} & {
    readonly [P in K]: T[P]
}

