console.log("i am connected");

const socket = io();

socket.on("connected", function() {
  //ab msg ka send/recv iske andr hoga
  console.log("i am connected " + socket.id);
  console.log("hello earthlings");
});
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
    socket.emit("join", obj, function(err) {
      if (err) {
        alert(err);
      } else {
        console.log("No error");
      }
    });
  });

  send.click(function() {
    var obj = {
      username: username.val(),
      msg: msg.val()
    };
    //console.log(obj);
      message.append(
        `<div class="col-md-8">
          <div class="d-inline-flex p-2" style="background-color:blanchedalmond;border-radius:10px;font-style:italic;">
           ${obj.username}<br>${msg.val()}
          </div>
        </div>
        <br>
        `
    )

    socket.emit('create_msg', obj);
  });

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
});
