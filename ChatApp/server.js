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

io.on('connection', function(socket){
    console.log('connected successfully');
    //some random error waali sheit here

    socket.on('join', function(data, callback){
        //data.id=socket.id;
        socket.join(data.room);
        users.removeUser(socket.id)
        console.log("data is "+data);
        users.addUser(socket.id, data.username, data.room);
        console.log(users.getUserList(data.room));

        io.to(data.room).emit('connected_users',users.getUserList(data.room));
        //emit for welcome in chat here to himself
        //broadcast other this bkl has entered
        
        callback();
    })

    socket.on('disconnect',function(){
        var user=users.removeUser(socket.id);
        
        if(user){
           io.to(user.room).emit('connected_users', users.getUserList(user.room));
           // emit others that he has leave
        }
    })

    socket.on('create_msg', function(data){
        console.log("users are "+users);
        users.showUsers();
        var user=users.getUser(socket.id);
        console.log("i am the siper user "+user)
        console.log("socket id is "+socket.id)
        if(user){
        socket.broadcast.to(user.room).emit('new_msg',data);
       // socket.broadcast.to(params.room).emit('newMessage', generateMessage('Admin', `${params.name} has joined.`));
        }
    })
})





