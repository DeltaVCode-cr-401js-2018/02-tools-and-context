'use strict';

class List{
  constructor(){
    this.length = 0;
  }
  push(item){
    if(!item){
      return this;
    } else{
      this[this.length++]= item;
    }
  }
  map(callback){
    var result = new List();

    for(let i=0; i<this.length; i++){
      result.push(callback(this[i], i));
    }

    return result;
  }
  pop(){
    if(this.length > 0){
      var res = this[this.length-1];
      this[this.length-1] = undefined;
      this.length--;
      return res;
    }

  }
  slice(x,y){
    if(isNaN(x)){
      return this;
    }
    if(!y){
      y = this.length;
    }
    var result = new List();
    for(let i=x; i<y; i++){
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