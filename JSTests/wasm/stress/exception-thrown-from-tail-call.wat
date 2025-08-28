(module
  (tag $tag)
  (func $throws
    throw $tag)
  (func $f (export "f")
    return_call $throws
  )
  (func (export "test") (result i32)
    try (result i32)
      call $f
      (i32.const 1)
    catch_all
      (i32.const 2)
    end
  )
)
