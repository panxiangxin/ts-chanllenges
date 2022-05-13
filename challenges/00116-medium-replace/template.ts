/*
 * @Description  :
 * @Author       : panxiangxin
 * @Email        : panxiangxin@ygsoft.com
 * @Date         : 2022-05-13 16:07:29
 * @LastEditTime : 2022-05-13 16:18:59
 * @LastEditors  : panxiangxin
 * @FilePath     : \ts-chanllenges\challenges\00116-medium-replace\template.ts
 */
type Replace1<S extends string, From extends string, To extends string> = From extends ""
  ? S
  : S extends `${From}${infer Ohters}`
  ? `${To}${Ohters}`
  : S extends `${infer P1}${From}${infer P2}`
  ? `${P1}${To}${P2}`
  : S extends `${infer S1}${From}`
  ? `${S1}${To}`
  : S;

  
type Replace<S extends string, From extends string, To extends string> = From extends ""
  ? S
  : S extends `${infer P}${From}${infer R}`
  ? `${P}${To}${R}`
  : S;
