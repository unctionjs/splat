/* eslint-disable no-magic-numbers */
import splat from "./index";

test(() => {
  expect(splat((left) => left + 1)([1])).toEqual(2);
});

test(() => {
  expect(splat((left) => (right) => left + right)([1, 2])).toEqual(3);
});


test(() => {
  expect(splat((left) => (right) => (final) => left + right - final)([1, 2, 3])).toEqual(0);
});
