import { describe, expect, it } from 'vitest';
import { slugify } from './slugify.js';

describe('slugify', () => {
  it('замінює пробіли дефісами та переводить у нижній регістр', () => {
    expect(slugify('Hello World')).toBe('hello-world');
  });

  it('прибирає зайві символи на краях', () => {
    expect(slugify('  --Hi!--  ')).toBe('hi');
  });

  it('повертає порожній рядок для порожнього вводу', () => {
    expect(slugify('')).toBe('');
  });

  it('прибирає повторювані роздільники', () => {
    expect(slugify('One___Two---Three')).toBe('one-two-three');
  });

  it('відхиляє значення, яке не є рядком', () => {
    expect(() => slugify(null)).toThrow(TypeError);
  });
});
