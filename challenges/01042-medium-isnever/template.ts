/*
 * @Description  : 
 * @Author       : panxiangxin
 * @Email        : panxiangxin@ygsoft.com
 * @Date         : 2022-05-19 10:26:06
 * @LastEditTime : 2022-05-19 10:42:16
 * @LastEditors  : panxiangxin
 * @FilePath     : \ts-chanllenges\challenges\01042-medium-isnever\template.ts
 */

// type IsNever<T> = `${T}` extends 'never' ? true : false

type IsNever<T> = [T] extends [never] ? true : false

