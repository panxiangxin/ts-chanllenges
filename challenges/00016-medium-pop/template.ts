/*
 * @Description  : 
 * @Author       : panxiangxin
 * @Email        : panxiangxin@ygsoft.com
 * @Date         : 2022-05-10 08:52:46
 * @LastEditTime : 2022-05-10 08:58:35
 * @LastEditors  : panxiangxin
 * @FilePath     : \ts-chanllenges\challenges\00016-medium-pop\template.ts
 */
type Pop<T extends any[]> = T extends [...infer K, infer _R] ?  K : never
type Shift<T extends any[]> = T extends [infer K, ...infer _R] ? K : never
type Push1<T extends any[], V> = [...T, V]
type Unshift1<T extends any[], V> = [V, ...T]
