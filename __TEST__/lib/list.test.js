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
    it('adds new things to the end of the list', () => {
      var list = new List();
      list.push('test');
      expect(list.length).toBe(1);
      expect(list[0]).toBe('test');

      list.push('testTwo');
      expect(list.length).toBe(2);
      expect(list[0]).toBe('test');
      expect(list[1]).toBe('testTwo');

      list.push('testThree');
      expect(list.length).toBe(3);
      expect(list[2]).toBe('testThree');
    });
  });

  //pop
  describe('pop', () => {
    it('removes last list element', () => {
      var list = new List();
      list.push('A');
      list.push('B');
      list.pop();
      expect(list.length).toBe(1);
      list.pop();
      expect(list.length).toBe(0);
    });
  });
  //slice
  describe('slice', () => {
    it('returns sliced elements from array', () => {
      let list = new List();
      list.push(1);
      list.push(2);
      list.push(3);
      list.push(4);
      //list.push(5);
      let sliceIt = list.slice(3);
      let diceIt =  list.slice(1);
      expect(sliceIt).toEqual({'0': 4, 'length': 1});
      expect(diceIt).toEqual({'0': 2,'1': 3, '2': 4,'length': 3});
    });
  });







  
  describe('forEach', () => {
    it('returns callback to elements in list', () => {
      var list = new List();
      list.push('iMac');
      list.push('iPod');
      list.push('Apple2E');
      list.push('');
      list.forEach(element => element.length);
      expect(list).toEqual({'0': 4, '1': 4, '2': 7, '3': 0, 'length':4});
    });
  });


  describe('map', () => {
    it('returns a new list', () => {
      var list = new List();
      var res = list.map(element => element);
      expect(res.length).toBe(list.length);
      expect(res).not.toBe(list);
    });
    it('returns new list with result callback', () => {
      var list = new List();
      list.push('iPhone');
      list.push('iWatch');
      var res = list.map(apple => apple.length);
      expect(res.length).toBe(list.length);
      expect(res[0]).toBe(6);
      expect(res[1]).toBe(6);

    });
    it('map calls callback with element and index', () => {
      var list = new List();
      list.push('ubiquity');
      list.push('unbuntu');
      var res = list.map((element, index) => ({element, index}));
      expect(res.length).toBe(list.length);
      expect(res[0]).toEqual({element: 'ubiquity', index: 0});
      expect(res[1]).toEqual({element: 'unbuntu', index: 1});
    });
  });



  describe('reduce', ()=>{
    it('returns initial value for empty list', ()=>{
      var list = new List();
      var initial = {};
      expect(list.reduce(()=> 'ignored', initial)).toBe(initial);
    });
    it('pushes elements', () => {
      var list = new List();
      list.push(1);
    });
    it('is equal to the elements in itself', () => {
      var list = new List();
      list.push('1');
      list.push(2);
      list.push(3);
      list.push(2);
      console.log(list);
      expect(list).toEqual({ '0': '1', '1': 2, '2': 3, '3': 2, length: 4 });
    // var res = list.reduce((acc, val)=> acc + val);
    // expect(res).toBe('truetruetruetrue');
    });
  });




});


