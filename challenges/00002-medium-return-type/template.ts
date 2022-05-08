/*
 * @Description  : 
 * @Author       : panxiangxin
 * @Email        : panxiangxin@ygsoft.com
 * @Date         : 2022-05-08 14:32:47
 * @LastEditTime : 2022-05-08 14:47:37
 * @LastEditors  : panxiangxin
 * @FilePath     : \ts-chanllenges\challenges\00002-medium-return-type\template.ts
 */
// type MyReturnType<T> = any

type MyReturnType<T> =  T extends (...args: any[]) => infer R ? R : never;