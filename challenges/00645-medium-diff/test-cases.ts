/*
 * @Description  : 
 * @Author       : panxiangxin
 * @Email        : panxiangxin@ygsoft.com
 * @Date         : 2022-05-18 11:19:19
 * @LastEditTime : 2022-05-18 11:54:35
 * @LastEditors  : panxiangxin
 * @FilePath     : \ts-chanllenges\challenges\00645-medium-diff\test-cases.ts
 */
import type { Equal, Expect } from '@type-challenges/utils'

type Foo = {
  name: string
  age: string
}
type Bar = {
  name: string
  age: string
  gender: number
}
type Coo = {
  name: string
  gender: number
}

type cases = [
  Expect<Equal<Diff1<Foo, Bar>, { gender: number }>>,
  Expect<Equal<Diff1<Bar, Foo>, { gender: number }>>,
  Expect<Equal<Diff1<Foo, Coo>, { age: string; gender: number }>>,
  Expect<Equal<Diff1<Coo, Foo>, { age: string; gender: number }>>,
]

type dd = Diffs<Foo, Bar>