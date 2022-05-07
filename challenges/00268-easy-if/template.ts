/*
 * @Description  : 
 * @Author       : panxiangxin
 * @Email        : panxiangxin@ygsoft.com
 * @Date         : 2022-05-07 11:09:31
 * @LastEditTime : 2022-05-07 11:12:05
 * @LastEditors  : panxiangxin
 * @FilePath     : \ts-chanllenges\challenges\00268-easy-if\template.ts
 */
type If<C extends boolean, T, F> = C extends true ? T : F;
