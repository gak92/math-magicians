import calculate from '../logic/calculate';

describe('Testing calculator object', () => {
  test('Testing result', () => {
    const obj = {
      total: '10',
      next: '5',
      operation: 'x',
    };
    const btn = '=';

    expect(
      calculate(obj, btn).total,
    ).toBe('50');
  });

  test('Testing operation', () => {
    const obj = {
      total: 0,
      next: 4,
      operation: null,
    };
    const btn = '+';

    expect(
      calculate(obj, btn).operation,
    ).toBe('+');
  });

  test('Testing next', () => {
    const obj = {
      total: 0,
      next: null,
      operation: null,
    };
    const btn = '4';

    expect(
      calculate(obj, btn).next,
    ).toBe('4');
  });
});
