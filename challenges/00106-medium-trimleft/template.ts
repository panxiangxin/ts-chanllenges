/*
 * @Description  : 
 * @Author       : panxiangxin
 * @Email        : panxiangxin@ygsoft.com
 * @Date         : 2022-05-11 10:10:55
 * @LastEditTime : 2022-05-11 10:30:39
 * @LastEditors  : panxiangxin
 * @FilePath     : \ts-chanllenges\challenges\00106-medium-trimleft\template.ts
 */
type trims = ' ' | '\t' | '\n'
type TrimLeft<S extends string> = S extends `${trims}${infer L}` ? TrimLeft<L> : S

