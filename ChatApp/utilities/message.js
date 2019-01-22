var moment = require('moment')

function generateMessage(from, text){
    return{
        from,
        text,
        createdAt:moment.valueof()    //returning current value of time
    };  //returning an object
};

module.exports={
    generateMessage
}

