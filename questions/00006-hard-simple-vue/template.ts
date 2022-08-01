type GetComputed<T> = {
  [K in keyof T]: T[K] extends () => infer Result ? Result : never
}

type Options<TData, TComputed, TMethods> = {
  data: (this: void) => TData
  computed: TComputed & ThisType<TData>
  methods: TMethods & ThisType<TData & GetComputed<TComputed> & TMethods>
}

declare function SimpleVue<TData, TComputed, TMethods>(
  options: Options<TData, TComputed, TMethods>
): unknown
