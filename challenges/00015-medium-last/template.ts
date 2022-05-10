/*
 * @Description  : 
 * @Author       : panxiangxin
 * @Email        : panxiangxin@ygsoft.com
 * @Date         : 2022-05-10 08:50:19
 * @LastEditTime : 2022-05-10 08:51:56
 * @LastEditors  : panxiangxin
 * @FilePath     : \ts-chanllenges\challenges\00015-medium-last\template.ts
 */
type Last<T extends any[]> = T extends [...infer _K, infer R] ? R : never;
