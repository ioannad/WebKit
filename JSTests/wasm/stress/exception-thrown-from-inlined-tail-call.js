import * as assert from '../assert.js'

var wasm_code = read('exception-thrown-from-inlined-tail-call.wasm', 'binary')
var wasm_module = new WebAssembly.Module(wasm_code);
var wasm_instance = new WebAssembly.Instance(wasm_module);
var test = wasm_instance.exports.test;

print("--- run 0 ---");
assert.eq(test(), 2);
print("---");

print("--- run 1 ---")
assert.eq(test(), 2);
print("---");

print("--- run 2 ---");
assert.eq(test(), 2);
print("---");

print("--- run 3 ---")
assert.eq(test(), 2);
print("---");

print("--- run 4 ---");
assert.eq(test(), 2);
print("---");

print("--- run 5 ---")
assert.eq(test(), 2);
print("---");
