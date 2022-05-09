/*
 * @Description  : 
 * @Author       : panxiangxin
 * @Email        : panxiangxin@ygsoft.com
 * @Date         : 2022-05-09 09:35:55
 * @LastEditTime : 2022-05-09 09:37:17
 * @LastEditors  : panxiangxin
 * @FilePath     : \ts-chanllenges\challenges\00010-medium-tuple-to-union\test-cases.ts
 */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<TupleToUnion<[123, '456', true]>, 123 | '456' | true>>,
  Expect<Equal<TupleToUnion<[123]>, 123>>,
]