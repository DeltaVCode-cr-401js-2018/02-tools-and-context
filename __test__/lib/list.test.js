const List = require('../../lib/list');
console.log(List);
describe('List', () => {
  describe('constructor', () => {
    it('has a length of 0', () => {
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
      expect(list[0]).toBe('test');
      expect(list[1]).toBe('test 2');
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
      list.push('dog');

      var res = list.map(animal => animal.length);
      expect(res.length).toBe(list.length);
      expect(res[0]).toBe(3);
    });

    it('calls callback with element and index', () => {
      var list = new List();
      list.push('John');
      list.push('Dylan');

      var res = list.map((element, index) => ({element, index}));
      expect(res.length).toBe(2);
      expect(res[0]).toEqual({ element: 'John', index: 0});
      expect(res[1]).toEqual({ element: 'Dylan', index: 1});
    });
  });
  describe('pop', () => {
    it('removes the last thing in the list', () => {
      var list = new List();
      list.push('cat');
      list.push('dog');
      list.push('mouse');

      list.pop();
      expect(list.length).toBe(2);
      list.pop();
      expect(list.length).toBe(1);
      list.pop();
      expect(list.length).toBe(0);
    });
    it('returns 0 if there are no items in the list', () => {
      var list = new List();
      list.pop();
      expect(list.length).toBe(0);
    });
  });
  describe('splice', () => {
    it('takes a number of items from a the list and returns a list with those items in it', () => {
      var list = new List();
      list.push('test');
      list.push('test2');
      list.push('test3');
      list.push('test4');
      list.push('test5');
      list.push('test6');
      
      expect(list.slice(1, 4).length).toBe(3);
    });
    it('returns null if NaN', () => {
      var list = new List();
      list.push('test');
      list.push('test2');
      list.push('test3');
      list.push('test4');
      list.push('test5');
      list.push('test6');

      expect(list.slice('test', 'test4')).toBe(null);
    });
    describe('forEach', ()=>{
      it('does something for each element in a list', ()=>{
        var list = new List();
        list.push(1);
        list.push(2);
        list.push(3);
        list.push(2);

        var res = 0;

        list.forEach(function(x){
          res+=x;
        });
        expect(res).toBe(8);
      });
    });
    describe('fitler',()=>{
      it('returns a new array',()=>{
        var list = new List();
        var result = list.filter(element => element);
  
        expect(result.length).toBe(list.length);
        expect(result).not.toBe(list);
      });
      describe('reduce', ()=>{
        it('takes any number of elements and reduces them to one value', ()=>{
          var list = new List();
          list.push(1);
          list.push(2);
          list.push(3);
          list.push(2);

          var res = list.reduce((acc, val)=> acc + val);
          expect(res).toBe(8);
        });
      });
    });
  });
});