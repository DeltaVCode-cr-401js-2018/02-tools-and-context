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
    if(this.length>0){
      this.length--;
    }

    return result;
  }

  slice(begin,end) {
    var result = new List();
    console.log(end);
    let loopEnd = end ? end + 1 : this.length;
    for(let i=begin;i<loopEnd;i++){
      result.push(this[i]);
    }
    return result;
  }

  forEach(callback) {
    for(let i=0;i<this.length;i++){
      this[i] = callback(this[i]);
    }
  }

  map(callback){
    var result = new List();

    for(let i=0;i<this.length;i++){
      result.push(callback(this[i],i));
    }

    return result;
  }

  filter(callback){
    var result = new List();

    for(let i=0;i<this.length;i++){
      if(callback(this[i])){
        result.push(this[i]);
      }
    }
    return result;
  }
}

module.exports = List;