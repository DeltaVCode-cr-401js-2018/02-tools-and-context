'use strict';

class List {
  constructor(){
    this.length = 0;
  }

  push(element) {
    this[this.length++] = element;
  }

  map(callback){
    var result = new List();

    return result;
  }
}

module.exports = List;