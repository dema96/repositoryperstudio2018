const area = require('./area')

test('test con due valori positivi (Stringhe)', () => {
  expect(area.getArea(lato=["3", "2"])).toBe(6);
});

test('test con due valori negativi (Stringhe)', () => {
  expect(area.getArea(lato=["-3", "-2"])).toBe(-1);
});

test('test con primo valore negativo (Stringhe)', () => {
  expect(area.getArea(lato=["-3", "2"])).toBe(-1);
});
test('test con secondo valore negativo (Stringhe)', () => {
  expect(area.getArea(lato=["3", "-2"])).toBe(-1);
});
test('test con parametro diverso da array', () => {
  expect(area.getArea(lato=3)).toBe(-3);
});
