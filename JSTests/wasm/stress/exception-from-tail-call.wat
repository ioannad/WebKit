(module
  (tag $tag)
  (tag $tag2)
  (func $throws
    throw $tag)
  (func $f
    try
      return_call $throws
      throw $tag2
    catch $tag
      unreachable
    catch $tag2
      unreachable
    end
  )
  (func (export "test") (result i32)
    try (result i32)
      call $f
      i32.const 1
    catch $tag
      i32.const 2
    catch $tag2
      i32.const 3
    end
  )
)
