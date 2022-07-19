type MyReturnType<T> = T extends () => infer R ? R : never
