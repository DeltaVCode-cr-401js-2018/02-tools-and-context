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

    for(let i=0;i<this.length;i++){
      result.push(callback(this[i],i));
    }

    return result;
  }
}

module.exports = List;