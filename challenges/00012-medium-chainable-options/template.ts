/*
 * @Description  :
 * @Author       : panxiangxin
 * @Email        : panxiangxin@ygsoft.com
 * @Date         : 2022-05-09 09:41:02
 * @LastEditTime : 2022-05-09 10:01:18
 * @LastEditors  : panxiangxin
 * @FilePath     : \ts-chanllenges\challenges\00012-medium-chainable-options\template.ts
 */
// type Chainable = {
//     option(key: string, value: any): any
//     get(): any
//   }

type Chainable<T extends object = {}> = {
  option<K extends string = string, V = any>(
    key: K extends keyof T ? never : K,
    value: V
  ): Chainable<
    T &
      {
        [P in K]: V;
      }
  >;
  get(): T;
};
