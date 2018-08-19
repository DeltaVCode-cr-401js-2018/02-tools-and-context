'use strict';

class List {

  //---------------------------------
  constructor() {
    this.length = 0;
  }
  //-----------------------------------
  push(element){
    this[this.length++] = element;
  }
  //--------------------------------------
  slice(start, stop){
    var result = new List();
    console.log('this is the stop ' + stop);
    let loopStop = stop ? stop + 1 : this.length;
    for(let x = start; x < loopStop; x++){
      result.push(this[x]);
    }
    return result;
  }
  //-----------------------------------
  pop(element){

    delete this[this.length--];
    if(this.length < 0) {
      this.length = 0;
    }
    return element;
  }

  //-------------------------------------
  forEach(callback){
    for(let x = 0; x < this.length; x++){
      this[x] = callback(this[x]);
    }
  }


  //-----------------------------------
  filter(callback){
    var result = new List();

    for(let x = 0; x < this.length; x++){
      if(callback(this[x])){
        result.push(this[x]);
      }
    }
    return result;
  }
  
  //-------------------------------------------
  map(callback){
    var result = new List();
    for(let x = 0; x < this.length; x++){
      result.push(callback(this[x], x));
    }
    return result;
  }

  //--------------------------------------
  reduce(reducerCallback, initVal){
    if(!initVal){
      var type = this.forEach(item =>{
        var prevType;
        if(prevType !== typeof(item)){
          return true;
        }
        //set the type of item to the prev type.
        prevType =typeof(item);
      });
      //if type is true and the prev val is differnet than the current => error.
      if(type === true){
        throw new Error('All elements must be the same type to be reduced.');
      } else if(typeof(this[0]) ==='string'){
        initVal = '';
      } else if (typeof(this[0]) === 'object' &&  !Array.isArray(this)){
        initVal = {};
      } else if(isNaN(this[0]) && !Array.isArray(this)){
        throw  new Error('Unrecognized list type');
      } else if(typeof(this[0]) === 'number'){
        initVal = 0; 
      } else {
        initVal = [];
      }
    }//close the if
    var sum = initVal;
    this.forEach(item => sum = reducerCallback(sum, item));
    return sum;
  }//close reduce





}//close class list



  




module.exports = List;