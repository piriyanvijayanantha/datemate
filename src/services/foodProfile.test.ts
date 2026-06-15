import { describe, it, expect } from 'vitest';
import {
  dedupeAllergies,
  addDishToList,
  updateDishInList,
  removeDishFromList,
  cleanDish,
} from './foodProfile';
import { FavoriteDish } from '../types';

const dish = (over: Partial<FavoriteDish> = {}): FavoriteDish => ({
  id: 'a',
  name: 'Pasta',
  createdAt: 1,
  ...over,
});

describe('dedupeAllergies', () => {
  it('trims, drops empties, and dedupes case-insensitively keeping first form', () => {
    expect(dedupeAllergies([' Nüsse ', 'nüsse', '', '  ', 'Laktose'])).toEqual([
      'Nüsse',
      'Laktose',
    ]);
  });

  it('returns [] for empty input', () => {
    expect(dedupeAllergies([])).toEqual([]);
  });
});

describe('addDishToList', () => {
  it('appends a dish with generated id and createdAt', () => {
    const result = addDishToList(
      [dish()],
      { name: 'Sushi', note: 'scharf' },
      () => 'fixed-id',
      () => 42,
    );
    expect(result).toHaveLength(2);
    expect(result[1]).toEqual({
      id: 'fixed-id',
      name: 'Sushi',
      note: 'scharf',
      createdAt: 42,
    });
  });

  it('omits empty optional fields', () => {
    const result = addDishToList([], { name: 'Reis', note: '', sourceUrl: '' }, () => 'x', () => 1);
    expect(result[0]).toEqual({ id: 'x', name: 'Reis', createdAt: 1 });
    expect('note' in result[0]).toBe(false);
    expect('sourceUrl' in result[0]).toBe(false);
  });
});

describe('updateDishInList', () => {
  it('replaces the dish with matching id, preserving order', () => {
    const result = updateDishInList(
      [dish({ id: 'a' }), dish({ id: 'b', name: 'Reis' })],
      { id: 'b', name: 'Reis mit Gemüse', createdAt: 5 },
    );
    expect(result[1]).toEqual({ id: 'b', name: 'Reis mit Gemüse', createdAt: 5 });
    expect(result[0].id).toBe('a');
  });

  it('returns the list unchanged when the id is not present', () => {
    const list = [dish({ id: 'a' }), dish({ id: 'b' })];
    const result = updateDishInList(list, { id: 'z', name: 'Ghost', createdAt: 99 });
    expect(result).toHaveLength(2);
    expect(result).toEqual(list);
  });
});

describe('removeDishFromList', () => {
  it('removes the dish with matching id', () => {
    const result = removeDishFromList([dish({ id: 'a' }), dish({ id: 'b' })], 'a');
    expect(result).toHaveLength(1);
    expect(result[0].id).toBe('b');
  });

  it('returns the list unchanged when the id is not present', () => {
    const list = [dish({ id: 'a' }), dish({ id: 'b' })];
    const result = removeDishFromList(list, 'z');
    expect(result).toHaveLength(2);
    expect(result).toEqual(list);
  });
});

describe('cleanDish', () => {
  it('removes keys whose value is undefined', () => {
    const result = cleanDish({
      id: 'a',
      name: 'X',
      createdAt: 1,
      note: undefined,
      sourceUrl: undefined,
    } as unknown as FavoriteDish);
    expect(result).toEqual({ id: 'a', name: 'X', createdAt: 1 });
    expect('note' in result).toBe(false);
    expect('sourceUrl' in result).toBe(false);
  });

  it('keeps present optional fields', () => {
    const result = cleanDish({ id: 'a', name: 'X', createdAt: 1, note: 'scharf' });
    expect(result).toEqual({ id: 'a', name: 'X', createdAt: 1, note: 'scharf' });
    expect(result.note).toBe('scharf');
  });
});
