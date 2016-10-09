(module
  (memory 256 256)
  (export "memory" memory)
  (type $FUNCSIG$dd (func (param f64) (result f64)))
  (import $exp "global.Math" "exp" (param f64) (result f64))
  (export "doubleExp" $doubleExp)
  (func $doubleExp (param $0 f64) (result f64)
    (f64.mul
      (call_import $exp
        (get_local $0)
      )
      (f64.const 2)
    )
  )
)
