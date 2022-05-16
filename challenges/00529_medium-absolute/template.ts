/*
 * @Description  : 
 * @Author       : panxiangxin
 * @Email        : panxiangxin@ygsoft.com
 * @Date         : 2022-05-16 10:30:39
 * @LastEditTime : 2022-05-16 10:33:30
 * @LastEditors  : panxiangxin
 * @FilePath     : \ts-chanllenges\challenges\00529_medium-absolute\template.ts
 */
type Absolute<T extends number | string | bigint> = `${T}` extends `-${infer R}` ? `${R}` : `${T}`
