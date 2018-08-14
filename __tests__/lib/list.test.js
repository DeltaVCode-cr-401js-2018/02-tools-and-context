'use strict';

const List = require('../../lib/list');

describe('List', () => {
  describe('constructor',()=> {
    it('has length of zero',()=>{
      var list = new List();

      expect(list.length).toBe(0);
    });
  });
  describe('push',()=>{
    it('adds a new thing to the end of the list',()=>{
      var list = new List();
      
      list.push('test');
      expect(list.length).toBe(1);
      expect(list[0]).toBe('test');

      list.push('test2');
      expect(list.length).toBe(2);
      expect(list[0]).toBe('test');
      expect(list[1]).toBe('test2');
    });
  });

  describe('map',()=>{
    it('returns a new list',()=>{
      var list = new List();
      var res = list.map(element => element);
      
      expect(res.length).toBe(list.length);
      expect(res).not.toBe(list);
    });

    it('returns new list with result of callback for each element', ()=>{
      var list = new List();
      list.push(2);
      list.push(3);

      var result = list.map(number => number*number);
      
      expect(result.length).toBe(list.length);
      expect(result[0]).toBe(4);
      expect(result[1]).toBe(9);
    });

    it('calls callback with element and index',()=>{
      var list = new List();
      list.push('John');
      list.push('Nathan');
      list.push('Craig');
      list.push('Ethan');
      list.push('Dylan');

      var result = list.map((element,index)=>`${index},${element}`);

      expect(result.length).toBe(list.length);
      expect(result[1]).toBe('1,Nathan');
    });
  });
});