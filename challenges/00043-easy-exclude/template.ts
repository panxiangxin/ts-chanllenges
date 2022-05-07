/*
 * @Description  : 
 * @Author       : panxiangxin
 * @Email        : panxiangxin@ygsoft.com
 * @Date         : 2022-05-07 11:00:53
 * @LastEditTime : 2022-05-07 11:02:30
 * @LastEditors  : panxiangxin
 * @FilePath     : \ts-chanllenges\challenges\00043-easy-exclude\template.ts
 */
type MyExclude<T, U> = T extends U ? never : T;
