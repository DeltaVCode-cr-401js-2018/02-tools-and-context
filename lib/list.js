'use strict';

class List {
  constructor(){
    this.length = 0;
  }

  push(element) {
    this[this.length++] = element;
  }
}

module.exports = List;