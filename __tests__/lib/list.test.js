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
