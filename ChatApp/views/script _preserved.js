console.log('i am connected');
const socket=io();

var username = $("#username");
var room = $("#room");
var msg = $("#msg");
var send = $("#send");
var submit = $("#submit");
var login_form = $("#login_form");
var msg_form = $("#msg_form");
var message = $("#message");
var online_list = $("#online_users");
console.log("vasco di gama was here")
send.click(function(e){
  e.preventDefault();
  var obj = {
   // username:username.val(),
    msg:msg.val()
  }
console.log('send with success '+obj);
socket.emit('create_msg', obj, function(){});
})

socket.on('connect', function(){
  var ms = (new Date).getTime();
  console.log('connected user id is now '+socket.id+' '+ms);
  var params = $.deparam(window.location.search);
  console.log('params ' +params)
  
  socket.emit('join', params, function(err){
    if(err){
      alert(err);
      window.location.href = '/';
    }
    else{
      console.log("no error");
    }
  }); //join ends here
});//connection ends here

socket.on("disconnect", function() {
  console.log("user disconnected");
});

socket.on("connected_users", function(data) {                   
  var ol = jQuery("<ol></ol>");

  data.forEach(function(user) {
    console.log(user);
    ol.append(jQuery("<li></li>").text(user));
  });

  jQuery("#online_users").html(ol);
});

socket.on('new_msg', function(data){
  console.log('received data is '+data)
  //message.append($('<li>'+data.username+' : '+ data.msg+'</li>'))
  message.append(
          `<div class=" clearfix mt-4">        <!--leftbox data-->
           <div class=" float-left message-box-left p-4" style="border:1px solid rgb(233, 21, 56);width:60%; ">
          <h6>${data.username}</h6>
          <div class="d-inline-flex float-left" style="border:1px solid pink;">
           <h5>${data.msg}</h5>
          </div>
          <h6 class="float-right">time</h6>
          </div>
          </div>       <!--leftbox data ends here-->
          <br>
          `)
})

socket.on('user_disconnected', function(user){
  console.log(user.name+' has left');
  message.append('<li>'+user.name+' has left '+'</li>')
})

  
  





socket.on('msg_himself', function(data){
  console.log("I have newly joined the chat room "+data);
  message.append(`<li>${data}</li>`)  
})

socket.on('new_user_joined', function(data){
  console.log('new user joined with data '+data);
  message.append(`<li>${data}</li>`)

})

socket.on('rooms', function(data){
  console.log('rooms : '+data)
  for(var i=0;i<data.length;i++){
    $('#chat_rooms').append($('<li>'+data[i]+'</li>'))
  }
})






//connected_users done
//new user_joined
/*
console.log("i am connected");

const socket = io();
$(function(){
  var obj = {
    id: null,
    username: username.val(),
    room: room.val()
  };

socket.on("connected", function() {
  //ab msg ka send/recv iske andr hoga
  var username = $("#username");
  var room = $("#room");
  var msg = $("#msg");
  var send = $("#send");
  var submit = $("#submit");
  var login_form = $("#login_form");
  var msg_form = $("#msg_form");
  var message = $("#message");

  var online_list = $("#online_users");
  console.log("i am connected " + socket.id);
  console.log("hello earthlings");
  socket.emit("join", obj, function(err) {
    if (err) {
      alert(err);
    } else {
      console.log("No error");
    }
  });
});
})
//var online_users=[];
$(function() {
  var username = $("#username");
  var room = $("#room");
  var msg = $("#msg");
  var send = $("#send");
  var submit = $("#submit");
  var login_form = $("#login_form");
  var msg_form = $("#msg_form");
  var message = $("#message");

  var online_list = $("#online_users");

  submit.click(function(e) {
    e.preventDefault();
    login_form.hide();
    msg_form.show();
    // console.log("username is "+username.val());
    //console.log("room is "+room.val());
    var obj = {
      id: null,
      username: username.val(),
      room: room.val()
    };
    
    //online_users.push(obj);
    //console.log(online_users);
    //socket.emit('user_list',obj);

  });

  send.click(function() {
    var obj = {
      username: username.val(),
      msg: msg.val()
    };
    //console.log(obj);


    socket.emit('create_msg', obj,function(){
      
    });
  });
  
  socket.on('new_user_joined', function(data){
    console.log(data);
  })
  socket.on("connected_users", function(data) {                   
    var ol = jQuery("<ol></ol>");

    data.forEach(function(user) {
      ol.append(jQuery("<li></li>").text(user));
    });

    jQuery("#online_users").html(ol);
  });

  socket.on("disconnect", function() {
    console.log("user disconnected");
  });

  socket.on('new_msg', function(data){
      console.log(data)
      //message.append($('<li>'+data.username+' : '+ data.msg+'</li>'))
      message.append(
        `<div class="d-flex justify-content-end" id="data">
         <div class="d-flex justify-content-end col-md-8" style="">
         <div class="d-inline-flex p-2" style="background-color:rgb(225, 221, 230);margin-right:10px;border-radius:10px;">${data.username}<br>${data.msg}</div>
         </div>
         </div> 
         <br>
        `
      )
      
  })

  socket.on('rooms', function(data){
    console.log('rooms : '+data)   
    for(var i=0;i<data.length;i++){
      $('#chat_rooms').append($('<li>'+data[i]+'</li>'))
    }
  })

  socket.on('user_disconnected', function(data){
        // console.log("i am here "+JSON.parse(data));
         message.append(
          `<div class="d-flex justify-content-center">
             <div class="d-flex-inline p-2" style="background-color:yellow;border-radius:5px;">${data.name} left the chat</div>
           </div>
           `
         )
  })

  socket.on("rooms", function(data) {
    var ol = jQuery("<ol></ol>");

    data.forEach(function(room_name) {
      ol.append(jQuery("<li></li>").text(room_name));
    });

    jQuery("#chat_rooms").html(ol);
  });
});
*/