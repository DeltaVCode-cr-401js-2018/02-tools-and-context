'use strict';

class List {
  constructor(){
    this.length = 0;
  }

  push(element) {
    this[this.length++] = element;
  }

  pop() {
    delete this[this.length-1];
      this.length--;
  map(callback){
    var result = new List();

    for(let i=0;i<this.length;i++){
      result.push(callback(this[i],i));
    }

    return result;
  }
}

module.exports = List;