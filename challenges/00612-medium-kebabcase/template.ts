/*
 * @Description  : 
 * @Author       : panxiangxin
 * @Email        : panxiangxin@ygsoft.com
 * @Date         : 2022-05-18 11:17:54
 * @LastEditTime : 2022-05-18 11:36:52
 * @LastEditors  : panxiangxin
 * @FilePath     : \ts-chanllenges\challenges\00612-medium-kebabcase\template.ts
 */

type KebabCase<S> = S extends `${infer Head}${infer Tail}` 
? `${Lowercase<Head>}${Tail extends Uncapitalize<Tail> 
    ? '' 
    : '-'}${KebabCase<Tail>}` 
: S;

type dd = Uncapitalize<"B">