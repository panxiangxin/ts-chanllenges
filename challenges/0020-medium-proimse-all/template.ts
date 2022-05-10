/*
 * @Description  : 
 * @Author       : panxiangxin
 * @Email        : panxiangxin@ygsoft.com
 * @Date         : 2022-05-10 09:13:23
 * @LastEditTime : 2022-05-10 10:06:06
 * @LastEditors  : panxiangxin
 * @FilePath     : \ts-chanllenges\challenges\0020-medium-proimse-all\template.ts
 */
declare function PromiseAll<T extends any[]>(values: readonly [...T]): Promise<{
    [key in keyof T]: T[key] extends Promise<infer R> ? R : T[key]
}>
