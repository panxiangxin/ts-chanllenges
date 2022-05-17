/*
 * @Description  : 
 * @Author       : panxiangxin
 * @Email        : panxiangxin@ygsoft.com
 * @Date         : 2022-05-17 13:49:15
 * @LastEditTime : 2022-05-17 13:54:12
 * @LastEditors  : panxiangxin
 * @FilePath     : \ts-chanllenges\challenges\00599-medium-merge\template.ts
 */
type Merge<F, S> = {
    [key in keyof F | keyof S]: key extends keyof S ? S[key] : key extends keyof F ? F[key] : never;
} 
