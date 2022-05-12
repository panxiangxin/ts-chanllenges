/*
 * @Description  : 
 * @Author       : panxiangxin
 * @Email        : panxiangxin@ygsoft.com
 * @Date         : 2022-05-12 10:19:58
 * @LastEditTime : 2022-05-12 10:28:53
 * @LastEditors  : panxiangxin
 * @FilePath     : \ts-chanllenges\challenges\00110-medium-capitalize\template.ts
 */
type MyCapitalize<S extends string> = S extends `${infer F}${infer others}` ? `${Uppercase<F>}${others}` : S;
