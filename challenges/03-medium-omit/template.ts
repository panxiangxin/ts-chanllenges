//去除 T 中 K 的类型
// type MyExclude1<T, K> = T extends K ? never : T;

// type MyOmit<T, K extends keyof T> = { 
//     [key in MyExclude1<keyof T, K>]: T[key]
// }

//使用 pick 和 exclude
type MyOmit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
