//A closure does not merely pass the value of a variable or even a reference to the variable.
//A closure captures the variable itself!
let msg = 'hello';
function test(msg) {
  console.log(msg);
}
msg='goodbye';

test('hello');