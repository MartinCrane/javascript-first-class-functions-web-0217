function receivesAFunction(callback) {
  callback();
}

function returnsANamedFunction(func) {
  return function go() {
    func();
  }
}
//
// function boss() {
//     console.log('hey') }
//
// z = returnsANamedFunction(boss);

function returnsAnAnonymousFunction(funct) {
  return function() {
    funct();
  }
}
