/*
 * @Description  : 
 * @Author       : panxiangxin
 * @Email        : panxiangxin@ygsoft.com
 * @Date         : 2022-05-17 13:40:59
 * @LastEditTime : 2022-05-17 13:48:11
 * @LastEditors  : panxiangxin
 * @FilePath     : \ts-chanllenges\challenges\00531-medium-stringToUnion\template.ts
 */
type StringToUnion<T extends string> = T extends `${infer R}${infer U}` ? R | StringToUnion<U> : never
