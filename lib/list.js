'use strict';

class List {
  constructor() {
    this.length = 0;
  }
  push(element) {
    this[this.length++] = element;
  }
  map(callback) {
    var result = new List();
    for(let i = 0; i < this.length; i++) {
      result.push(callback(this[i], i));
    }
    return result;
  }
  pop(element) {
    delete this[this.length--];
    if(this.length < 0) {
      this.length = 0;
    }
    return element;
  }
  slice(begin, end) {
    if(typeof begin !== 'number' || typeof end !== 'number') {
      return null
    }
    var result = new List();
    for(let i = begin; i < end; i ++) {
      result.push(this[i]);
    }
    return result;
  }
  forEach(callback){
    for(let i=0; i<this.length; i++){
      callback(this[i]);
    }
  }
  filter(callback){
    return this.map(item => {
      console.log(item);
      var result = callback(item);
      console.log(result);
      if(result === true){
        return item;
      }
    });
  }
  reduce(reducerCallback, initVal){
    if(!initVal){
      var type = this.forEach(item =>{
        var prevType;
        if(prevType !== typeof(item)){
          return true;
        }
        prevType = typeof(item);
      });
      if(type === true){
        throw new Error('All elements must be the same type to be reduced');
      }
      else if(typeof(this[0])==='string'){
        initVal = '';
      }
      else if (typeof(this[0])==='object' && !Array.isArray(this)){
        initVal = {};
      }else if(isNaN(this[0]) && !Array.isArray(this)){
        throw new Error('Unrecognized list type');
      } else if(typeof(this[0])==='number'){
        initVal = 0;
      } 
      else{
        initVal = [];
      }
    }
    var sum = initVal;
    this.forEach(item => sum = reducerCallback(sum,item));
    return sum;
  }
}

module.exports = List;