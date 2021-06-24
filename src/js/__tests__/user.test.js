
import game from '../user';

test('should return the health state as a string', () => {
  const received = game({ name: 'Маг', health: 90 });

  const expected = 'healthy';
  expect(received).toBe(expected);
});

test('should return the health state as a string', () => {
  const received = game({ name: 'Маг', health: 50 });

  const expected = 'wounded';
  expect(received).toBe(expected);
});
test('should return the health state as a string', () => {
  const received = game({ name: 'Маг', health: 31 });

  const expected = 'wounded';
  expect(received).toBe(expected);
});
test('should return the health state as a string', () => {
  const received = game({ name: 'Маг', health: 15 });

  const expected = 'wounded';
  expect(received).toBe(expected);
});
test('should return the health state as a string', () => {
  const received = game({ name: 'Маг', health: 14 });

  const expected = 'critical';
  expect(received).toBe(expected);
});

//  второй вариант

test.each([
  ['healthy', 51],
  ['wounded', 40],
  ['critical', 10],
  ['wounded', 15],
  ['wounded', 50],
])(('should return the health state as a string'), (expected, points) => {
  const received = game({ name: 'Маг', health: points });
  expect(received).toBe(expected);
});
