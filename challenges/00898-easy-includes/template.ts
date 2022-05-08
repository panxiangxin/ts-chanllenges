type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends (<T>() => T extends Y ? 1 : 2) ? true : false;

type Includes<T extends any[], U> = T extends [infer X, ...infer Y] ?
    (Equal<X, U> extends true ? true : Includes<Y, U>)
    : false;
