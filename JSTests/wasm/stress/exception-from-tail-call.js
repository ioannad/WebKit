var wasm_code = read('exception-from-tail-call.wasm', 'binary')
var wasm_module = new WebAssembly.Module(wasm_code);
var wasm_instance = new WebAssembly.Instance(wasm_module);
var test = wasm_instance.exports.test;

print(test());

for (let i = 0; i < 5000; ++i) {
  if ( test() != 2 ) {
    throw new Error("Result should be 22");
  }
}

