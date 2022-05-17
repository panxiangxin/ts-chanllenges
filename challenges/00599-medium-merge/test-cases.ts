/*
 * @Description  : 
 * @Author       : panxiangxin
 * @Email        : panxiangxin@ygsoft.com
 * @Date         : 2022-05-17 13:49:15
 * @LastEditTime : 2022-05-17 13:54:48
 * @LastEditors  : panxiangxin
 * @FilePath     : \ts-chanllenges\challenges\00599-medium-merge\test-cases.ts
 */
import type { Equal, Expect } from '@type-challenges/utils'

type Foo = {
  a: number
  b: string
}
type Bar = {
  b: number
  c: boolean
}

type cases = [
  Expect<Equal<Merge<Foo, Bar>, {
    a: number
    b: number
    c: boolean
  }>>,
]
