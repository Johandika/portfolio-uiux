function palindrome(argument) {
  var x = argument.length - 1;
  if (x === 1 || argument.length === 0) {
    return true;
  }
  if (argument[0] === argument[x]) {
    return palindrome(argument.slice(1, x));
  }
  return false;
}
console.log(palindrome("johan"));
