/*
 * @Description  : 
 * @Author       : panxiangxin
 * @Email        : panxiangxin@ygsoft.com
 * @Date         : 2022-05-12 09:47:58
 * @LastEditTime : 2022-05-12 09:52:44
 * @LastEditors  : panxiangxin
 * @FilePath     : \ts-chanllenges\challenges\00108-medium-trim\template.ts
 */
type diff = ' ' | '\n' | '\t';
type Trim<S extends string> = S extends `${diff}${infer U}` 
? Trim<U> : S extends `${infer K}${diff}` ? Trim<K> : S  