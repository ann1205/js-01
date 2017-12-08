const a = Number(prompt('Enter A'));
const b = Number(prompt('Enter B'));
const c = Number(prompt('Enter C'));
const result = solveQuadr(a, b, c);
document.write(result);

function solveQuadr(a, b, c) {
  const d = discr(a, b, c);
  if (d > 0) {
  return x1 = (-b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / 2 * a;
  return x2 = (-b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / 2 * a;
  }
  if (d == 0) {
    x1 = x2 = -(b / 2 * a);
  }
}

return 'x1 = ' + x1 + 'x2 = ' + x2;

function discr(a, b, c) {
  return Math.pow(b, 2) - 4 * a * c;
}
