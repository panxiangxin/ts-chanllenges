/*
 * @Description  : 
 * @Author       : panxiangxin
 * @Email        : panxiangxin@ygsoft.com
 * @Date         : 2022-05-13 16:24:44
 * @LastEditTime : 2022-05-13 16:28:58
 * @LastEditors  : panxiangxin
 * @FilePath     : \ts-chanllenges\challenges\00119-medium-replaceAll\template.ts
 */
type ReplaceAll<S extends string, From extends string, To extends string> = From extends '' ? S
: S extends `${infer P1}${From}${infer P2}`
? `${P1}${To}${ReplaceAll<`${P2}`, From, To>}`
: S;
