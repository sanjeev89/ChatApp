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
var room_name=$('#room-name');
console.log("vasco di gama was here")

send.click(function(e){
  var params = $.deparam(window.location.search);
  if(params.pic===''){
    params.pic='1.jpg';
  }
  e.preventDefault();
  var obj = {
    name:params.username,
    pic:params.pic,
    msg:msg.val()
  }
console.log('hello india ' +params.pic);
console.log('send with success '+obj);
  message.append(
      `<div class="d-flex justify-content-start mb-4">  <!--sender ka msg-->  
       <div class="img_cont_msg">
          <img src="${obj.pic}" class="rounded-circle user_img_msg">
       </div>
       <div class="msg_cotainer">
       <div class="d-flex justify-content-start mb-0 form-text text-muted" style="font-size:12px; margin-top:-7px;">
       <em>${obj.name}</em>
       </div>
          ${msg.val()}
          <span class="msg_time">${get_time()}, Today</span>
       </div>
       </div>
       `)
socket.emit('create_msg', obj, function(){});
})

socket.on('connect', function(){
  var ms = (new Date).getTime();
  console.log('connected user id is now '+socket.id+' '+ms);
  var params = $.deparam(window.location.search);
  console.log('params ' +params)
  if(params.pic===''){
    params.pic='1.jpg';
  }
  
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
  var ui = jQuery(`<ui class="contacts"></ui>`);

  data.forEach(function(user) {
    console.log(user);
    ui.append(jQuery(
        `<li class="">     <!--yhaa se -->
          <div class="d-flex bd-highlight">
            <div class="img_cont">
                <img src="${user.pic}" class="rounded-circle user_img">
                <span class="online_icon"></span>
            </div>
            <div class="user_info">
                <span>${user.name}</span>
                <p>${user.name} is online</p>
            </div>
           </div>
          </li>
        `))
  });
  jQuery("#online_users").html(ui);
});

socket.on('new_msg', function(data){
  console.log('received data is '+data)
  //message.append($('<li>'+data.username+' : '+ data.msg+'</li>'))
  message.append(
      `<div class="d-flex justify-content-end mb-4">    <!--receiver ka msg-->
        <div class="msg_cotainer_send">         <!--idr message append krna h-->
        <div class="d-flex justify-content-start mb-0 form-text text-muted" style="font-size:12px; margin-top:-7px;">
        <em>${data.name}</em>
        </div>
          ${data.msg}
          <span class="msg_time_send">${get_time()}, Today</span>      <!--idr apun time add krega-->
        </div>
        <div class="img_cont_msg">
          <img src="${data.pic}" class="rounded-circle user_img_msg">
        </div>
       </div>
      `
  )
})

socket.on('user_disconnected', function(user){
  console.log(user.name+' has left');
  //message.append('<li>'+user.name+' has left '+'</li>')
  message.append(
      `<div class="d-flex justify-content-center mb-4">
       <span class="p-2" style="background-color:yellow; border-radius:5px">${user.name} left</span>
       </div>`
  )
})

socket.on('msg_himself', function(data){
  console.log("I have newly joined the chat room "+data);
  //message.append(`<li>${data}</li>`)
    message.append(
        `<div class="d-flex justify-content-center mb-4">
         <span class="p-2" style="background-color:yellow; border-radius:5px">${data}</span>
         </div>
         `
    )  
})

socket.on('new_user_joined', function(data){
  console.log('new user joined with data '+data);
  //message.append(`<li>${data}</li>`)
  message.append(
      `<div class="d-flex justify-content-center mb-4">
       <span class="p-2" style="background-color:yellow; border-radius:5px">${data}</span>
       </div>`
  ) 

})

socket.on('rooms', function(data){
  var b=$('<b></b>')
  room_name.append(`<b>${data}</b>`)
})

function get_time(){
var time = new Date();
console.log(time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }));
return time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
console.log(time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }));
}



