const { formatKSh } = require('./utils');

describe('formatKSh', () => {
  it('formats whole numbers with Kenyan formatting', () => {
    expect(formatKSh(85000)).toBe('KSh 85,000');
  });

  it('formats zero correctly', () => {
    expect(formatKSh(0)).toBe('KSh 0');
  });

  it('preserves decimal fractions', () => {
    expect(formatKSh(1234.56)).toBe('KSh 1,234.56');
  });
});