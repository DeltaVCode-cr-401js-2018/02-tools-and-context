'use strict';

class List {
  constructor(){
    this.length = 0;
  }

  push(element) {
    this[this.length++] = element;
  }

  pop() {
    var result = this[this.length-1];
    delete this[this.length-1];
      this.length--;

    return result;
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