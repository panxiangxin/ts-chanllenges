/*
 * @Description  : 
 * @Author       : panxiangxin
 * @Email        : panxiangxin@ygsoft.com
 * @Date         : 2022-05-07 11:04:29
 * @LastEditTime : 2022-05-07 11:07:41
 * @LastEditors  : panxiangxin
 * @FilePath     : \ts-chanllenges\challenges\00189-easy-awaited\template.ts
 */
type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer R> ? R extends Promise<unknown> ? MyAwaited<R>: R : never; 
