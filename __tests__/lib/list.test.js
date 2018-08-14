'use strict';

const List = require('../../lib/list');

describe('List', () => {
  describe('constructor',()=> {
    it('has length of zero',()=>{
      var list = new List();

      expect(list.length).toBe(0);
    });
  });
