/*
 * @Description  : 
 * @Author       : panxiangxin
 * @Email        : panxiangxin@ygsoft.com
 * @Date         : 2022-05-09 09:35:55
 * @LastEditTime : 2022-05-09 09:39:01
 * @LastEditors  : panxiangxin
 * @FilePath     : \ts-chanllenges\challenges\00010-medium-tuple-to-union\template.ts
 */
type TupleToUnion<T extends unknown[]> = T[number];
