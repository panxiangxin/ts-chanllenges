/*
 * @Description  : 
 * @Author       : panxiangxin
 * @Email        : panxiangxin@ygsoft.com
 * @Date         : 2022-05-16 10:09:22
 * @LastEditTime : 2022-05-16 10:29:21
 * @LastEditors  : panxiangxin
 * @FilePath     : \ts-chanllenges\challenges\00527_medium_append_to_object\template.ts
 */
// type AppendToObject<T, U extends string, V> = {
//     [key in keyof T]: T[key]
// } & {
//     [key in U]: V
// }

// type AppendToObject<T extends Record<string, unknown>, U extends string, V> = {
//     [K in keyof T | U]: K extends U ? V : T[K]
// }

type AppendToObject<T, U extends string, V> = {
    [K in keyof T | U]: K extends keyof T ? T[K] : V
}