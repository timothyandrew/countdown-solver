import _ from "lodash";

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
const ops = [add, subtract, multiply, divide];

function permute(numbers, memo) {
  return _.flatMap(numbers, (n, i) => {
    if (numbers.length === 1) {
      return [[...memo, n]];
    }

    return _.flatMap(ops, op => {
      return permute(_.filter(numbers, (_, index) => index !== i), [...memo, n, op]);
    })
  })
}

function execute(candidate) {
  let current = candidate[0];
  let fn = null;

  _.drop(candidate).forEach(c => {
    if (_.isFunction(c)) {
      fn = c;
    } else {
      current = fn(current, c);
    }
  })

  return current;
}

export function Format(candidate) {
  let s = '';

  return _.map(candidate, c => {
    if (c === add) { return '+' }
    if (c === subtract) { return '-' }
    if (c === multiply) { return '*' }
    if (c === divide) { return '/' }
    return c;
  }).join(" ");
}

export default function Solve(numbers, target) {
  let candidates = permute(numbers, []);
  console.log(`Found ${candidates.length} candidates`)
  return _.filter(candidates, c => execute(c) === target);
}