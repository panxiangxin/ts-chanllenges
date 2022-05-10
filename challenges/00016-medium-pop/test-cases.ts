/*
 * @Description  : 
 * @Author       : panxiangxin
 * @Email        : panxiangxin@ygsoft.com
 * @Date         : 2022-05-10 08:52:46
 * @LastEditTime : 2022-05-10 08:55:35
 * @LastEditors  : panxiangxin
 * @FilePath     : \ts-chanllenges\challenges\00016-medium-pop\test-cases.ts
 */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Pop<[3, 2, 1]>, [3, 2]>>,
  Expect<Equal<Pop<['a', 'b', 'c', 'd' ]>, ['a', 'b', 'c']>>,
]
