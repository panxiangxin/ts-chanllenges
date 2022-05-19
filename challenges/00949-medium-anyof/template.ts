/*
 * @Description  : 
 * @Author       : panxiangxin
 * @Email        : panxiangxin@ygsoft.com
 * @Date         : 2022-05-19 10:24:46
 * @LastEditTime : 2022-05-19 10:38:09
 * @LastEditors  : panxiangxin
 * @FilePath     : \ts-chanllenges\challenges\00949-medium-anyof\template.ts
 */
type Flse = 0 | '' | [] | false | Record<string, never>
// type AnyOf<T extends readonly any[]> = T extends [infer Head, ...infer Others] ? Head extends Flse ? AnyOf<Others> : true : false

type AnyOf<T extends readonly any[]> = T[number] extends Flse ? false : true