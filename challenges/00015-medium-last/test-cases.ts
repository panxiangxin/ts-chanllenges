/*
 * @Description  : 
 * @Author       : panxiangxin
 * @Email        : panxiangxin@ygsoft.com
 * @Date         : 2022-05-10 08:50:19
 * @LastEditTime : 2022-05-10 08:51:03
 * @LastEditors  : panxiangxin
 * @FilePath     : \ts-chanllenges\challenges\00015-medium-last\test-cases.ts
 */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Last<[3, 2, 1]>, 1>>,
  Expect<Equal<Last<[() => 123, { a: string }]>, { a: string }>>,
]