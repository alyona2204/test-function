import healthStatus from '../src/healthStatus';

describe('healthStatus', () => {
  test('returns healthy if health > 50', () => {
    const hero = { name: 'Маг', health: 90 };
    expect(healthStatus(hero)).toBe('healthy');
  });

  test('returns wounded if health is between 15 and 50', () => {
    const hero = { name: 'Воин', health: 30 };
    expect(healthStatus(hero)).toBe('wounded');
  });

  test('returns wounded if health equals 15', () => {
    const hero = { name: 'Лучник', health: 15 };
    expect(healthStatus(hero)).toBe('wounded');
  });

  test('returns critical if health < 15', () => {
    const hero = { name: 'Мечник', health: 10 };
    expect(healthStatus(hero)).toBe('critical');
  });
});
