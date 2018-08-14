'use strict';

const List = require('../../lib/list');

describe('List', () => {
  describe('constructor', () => {
    it('has length of zero', () => {
      var list = new List();

      expect(list.length).toBe(0);
    });
  });

  describe('push', () => {
    it('pushes a new thing into the end of the list', () => {
      var list = new List();

      list.push('test');
      expect(list.length).toBe(1);
      expect(list[0]).toBe('test');

      list.push('test 2');
      expect(list.length).toBe(2);
      expect(list[0]).toBe('test');
      expect(list[1]).toBe('test 2');

      list.push('test 3');
      expect(list.length).toBe(3);
      expect(list[2]).toBe('test 3');
    });
  });

  describe('map', () => {
    it('returns a new list', () => {
      var list = new List();

      var res = list.map(element => element);

      expect(res.length).toBe(list.length);
      expect(res).not.toBe(list);
    });

    it('returns new list with result of callback for each element', () => {
      var list = new List();
      list.push('cat');
      list.push('elephant');
      console.log(list);

      var res = list.map(animal => animal.length);
      console.log(res);

      expect(res.length).toBe(list.length);
      expect(res[0]).toBe(3);
      expect(res[1]).toBe(8);
    });

    it('calls callback with element and index', () => {
      var list = new List();
      list.push('John');
      list.push('Nathan');
      console.log(list);

      var res = list.map(
        (element, index) => `${index}: ${element}`
      );
      console.log(res);

      expect(res.length).toBe(2);
      expect(res[0]).toEqual('0: John');
      expect(res[1]).toEqual('1: Nathan');
    });
  });
});
