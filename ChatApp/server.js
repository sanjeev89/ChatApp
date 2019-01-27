
const express=require('express');
const app=express();
const http=require('http');
const path=require('path');
const socketio=require('socket.io');
const server=http.createServer(app);
app.use(express.static(path.join(__dirname,'views')));
app.set('views', path.join(__dirname,'views'));
const io=socketio(server);

server.listen(1000, function(){
  console.log('http://localhost:1000');
})

var {Users} = require('./utilities/user');
var users = new Users();
var {generateMessage,generateLocationMessage}=require('./utilities/message');
var {isRealString} = require('./utilities/validation')
var u_rooms=[];




io.on('connection', function(socket){
    var ms = (new Date).getTime();
    console.log('connected user id is now '+socket.id+' '+ms);

  socket.on('join', function(params, callback){
      console.log(params);
     if(!isRealString(params.username) || !isRealString(params.room)){
         return callback("Incorrect username or data ");
     } 

     socket.join(params.room);
     users.removeUser(socket.id);
     users.addUser(socket.id, params.username, params.room);

     io.to(params.room).emit('connected_users', users.getUserList(params.room));
     socket.emit('msg_himself', "welcome to the chatApp");
     socket.broadcast.to(params.room).emit('new_user_joined', `${params.username} has joined the ${params.room}`);
     callback();
   })//join ends here

   socket.on('create_msg', function(message,callback){
       console.log('receive with success '+message.msg);
    var user=users.getUser(socket.id);
    
    if(user && isRealString(message.msg)){
        message.username=user.name;
      io.to(user.room).emit('new_msg', message); /* */
      console.log('send with success to new_msg '+message.msg);
    }
   
    if(user===undefined){
        console.log('mein idr bol gya ');
    }

    callback();
  })   //create_msg ends here

   socket.on('disconnect', function(){
      // users.showUsers();
    
       console.log('separate ');
     var user=users.removeUser(socket.id);
      // console.log(users.getUserList(user.room));
    // users.showUsers();          //
     if(user){
         console.log('abey chat mt '+user.name)
         console.log(users.getUserList(user.room));
       io.to(user.room).emit('user_disconnected', user);
       io.to(user.room).emit('connected_users', users.getUserList(user.room));
     }
     console.log('usr sisconnect mein nhi mila ');
      console.log(users.getUserList(user.room));
   })    //disconnect ends here



})//connection ends here

function get_rooms(room){
  var i=0;
  for(i=0; i<u_rooms.length; i++){
    if(u_rooms[i]===room){
        return u_rooms;
    }
  }
  if(i===u_rooms.length){
    u_rooms.push(room);
    return u_rooms;
  }
}


//connected_users done
//new user_joined
//user_list missing jismein user ki info aani h
{
    /*
    const express=require('express');
    const app=express();
    
    const http=require('http');
    const server=http.createServer(app);
    
    const path=require('path');
    const socketio=require('socket.io');
    const io=socketio(server);
    
    //app.set('view engine', 'hbs');
    app.set('views', path.join(__dirname,'views'));
    app.use(express.static(path.join(__dirname,'views')));
    
    server.listen(1000, function(){
        console.log("server started at http://localhost:1000");
    })
    
    var {Users}=require('./utilities/user');
    var users=new Users();
    var u_rooms=[];
    
    io.on('connection', function(socket){
        console.log('new user connected successfully');
        //some random error waali sheit here
        socket.on('join', function(data, callback){
            //data.id=socket.id;
           
           
           
            socket.join(data.room);
            users.removeUser(socket.id)
            console.log("data is "+data);
            users.addUser(socket.id, data.username, data.room);
            //console.log(users.getUserList(data.room));
            io.to(data.room).emit('connected_users',users.getUserList(data.room));
            //socket.emit('msg_himself', data);                          //console.log('emitted rooms '+get_rooms(data.room))
            socket.broadcast.to(data.room).emit('new_user_joined',data);
            callback();
            //io.emit('rooms', get_rooms(data.room))
            //emit for welcome in chat here to himself
            //broadcast other this bkl has entered
        
        });//socket.join ends here
    
        socket.on('disconnect',function(){
            var user=users.removeUser(socket.id);
           // console.log("hi" +user.room)
            //console.log("jhi" +user.name)
            //console.log("jhj"+user.id)
            //var name=user.name;
            
            if(user){
               io.to(user.room).emit('connected_users', users.getUserList(user.room));
               socket.broadcast.to(user.room).emit('user_disconnected', user)
               console.log('emiited user is' +user)
            }
        })//disconnect ends here
    
        socket.on('create_msg', function(data, callback){
            users.showUsers();              //console.log("users are "+users);
            var user=users.getUser(socket.id);
            console.log("i am the super user "+user)
            console.log("socket id is "+socket.id)
            if(user){
            socket.broadcast.to(user.room).emit('new_msg',data);
           // socket.broadcast.to(params.room).emit('newMessage', generateMessage('Admin', `${params.name} has joined.`));
            }
            callback();
        })//create msg ends here
    
    
    })
    
    function get_rooms(room){
        var i=0;
        for(i=0;i<u_rooms.length;i++){
            if(u_rooms[i]===room){
                return u_rooms;
            }
        }
        if(i===u_rooms.length){
            u_rooms.push(room);
            return u_rooms;
        }
    }
    
    */
    }
    





