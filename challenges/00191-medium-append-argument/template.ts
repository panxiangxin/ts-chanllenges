type AppendArgument<Fn extends (...args: any[]) => any, A> = Fn extends (...args: infer G) => infer R ? (...args: [...G, A]) => R : never 
