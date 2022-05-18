/*
 * @Description  : 
 * @Author       : panxiangxin
 * @Email        : panxiangxin@ygsoft.com
 * @Date         : 2022-05-18 11:19:19
 * @LastEditTime : 2022-05-18 13:45:04
 * @LastEditors  : panxiangxin
 * @FilePath     : \ts-chanllenges\challenges\00645-medium-diff\template.ts
 */
type Diff1<O, O1> = {
    [key in Diffs<O, O1>]: key extends keyof O ? O[key] : key extends keyof O1 ? O1[key] : never
}

type Diffs<A, B> = Exclude<keyof A, keyof B> | Exclude<keyof B, keyof A>
