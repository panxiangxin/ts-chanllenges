/*
 * @Description  : 
 * @Author       : panxiangxin
 * @Email        : panxiangxin@ygsoft.com
 * @Date         : 2022-05-08 15:32:52
 * @LastEditTime : 2022-05-08 15:48:31
 * @LastEditors  : panxiangxin
 * @FilePath     : \ts-chanllenges\challenges\00009-medium-deep-readonly\template.ts
 */
// type DeepReadonly<T> = any
type DeepReadonly<T> = {
    readonly [key in keyof T]: T[key] extends Record<string, unknown> | Array<unknown> ? DeepReadonly<T[key]> : T[key]
}

type Diff = string | number | boolean | symbol | bigint | Function | null | undefined

type DeepReadonly1<T> = T extends Diff ? T : {
    readonly [key in keyof T]: DeepReadonly1<T[key]>
}