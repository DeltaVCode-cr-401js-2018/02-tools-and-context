const List = require('../lib/list');

describe('list', ()=>{
  it('has a length', ()=>{
    let newList = new List();
    expect(newList.length).toBe(0);
  });
  it('can change lengths', ()=>{
    let newList = new List();
    newList.push(1);
    expect(newList.length).toBe(1);
  });
  describe('push', ()=>{
    it('can add elements to the end of the list', ()=>{
      let list = new List();
      list.push(1);
      expect(list[0]).toBe(1);
      list.push(2);
      expect(list[1]).toBe(2);
    });
    describe('map', ()=>{
      it('returns a new list', ()=>{
        var list = new List();
        var res = list.map(element => element);
        expect(res.length).toBe(list.length);
        expect(res).not.toBe(list);
      });
      it('returns new list with a result of the callback', ()=>{
        var list = new List();
        list.push(1);
        list.push(2);

        var res = list.map(number => number*2);
        expect(res[0]).toBe(2);
        expect(res[1]).toBe(4);
      });
      it('calls callback with element and index', ()=>{
        var list = new List();
        list.push(1);
        list.push(2);

        var res = list.map((element, index) => ({element, index}));
        expect(res[0]).toEqual({element: 1, index: 0});
      });
    });
    describe('pop', ()=>{
      it('removes the last element in a list and returns it', ()=>{
        var list = new List();
        list.push(1);
        list.push(2);

        var res = list.pop();
        expect(res).toBe(2);
        expect(list.length).toBe(1);
        expect(list[1]).toBe(undefined);
      });
    });
    describe('slice', ()=>{
      it('returns the list if the first argument is not a number', ()=>{
        var list = new List();
        expect(list.slice()).toBe(list);
      });
      it('returns a new list if first argument is a number', ()=>{
        var list = new List();
        list.push(1);
        list.push(2);

        expect(list.slice(1)).not.toBe(list);
      });
      it('returns a portion of a list from a specified start and end (does not include end value)', ()=>{
        var list = new List();
        list.push(1);
        list.push(2);
        list.push(3);
        list.push(2);

        var res = list.slice(1,3);
        expect(res.length).toBe(2);
        expect(res[1]).toBe(3);
        expect(res[0]).toBe(2);
      });
      it('returns a portion of a list from a specified start point to the list\'s end if no end is specified', ()=>{
        var list = new List();
        list.push(1);
        list.push(2);
        list.push(3);
        list.push(2);

        var res = list.slice(1);
        expect(res.length).toBe(3);
        expect(res[2]).toBe(2);
      });
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
    describe('filter', ()=>{
      it('does everything map does except it returns only elements that pass the test implemented in the fucntion', ()=>{
        var list = new List();
        list.push(1);
        list.push(2);
        list.push(3);
        list.push(2);

        var res = list.filter(element => element === 2);
        expect(res.length).toBe(2);
        expect(res[0]).toBe(2);
        expect(res[1]).toBe(2);
      });
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