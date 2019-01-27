var moment = require('moment')

function generateMessage(from, text){
    return{
        from,
        text,
        //createdAt:moment.valueof()    //returning current value of time
    };  //returning an object
};
/*
var generateLocationMessage = (from, latitude, longitude) => {
    return {
      from,
      url: `https://www.google.com/maps?q=${latitude},${longitude}`,
      createdAt: moment().valueOf()
    };
  };
*/

var generateLocationMessage = "hello world :";
module.exports={
    generateMessage,generateLocationMessage
}

