<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />

    <script
      src="https://code.jquery.com/jquery-3.3.1.js"
      integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60="
      crossorigin="anonymous"
    ></script>
    <script 
     src="/socket.io/socket.io.js">
     </script>
    <script 
    src="script.js">
    </script>
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
      integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
      crossorigin="anonymous"
    />
    <script
      src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"
      integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
      integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"
      integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
      crossorigin="anonymous"
    ></script>
    <title>Document</title>
  </head>
  <body>
    <!--
    <div id="login_form">
      <input type="text" placeholder="name" id="username" /> <br />
      <input type="text" placeholder="room name" id="room" />
      <button id="submit">submit</button>
    </div>
    

    <div id="msg_form" style="display:none;">
      <input type="text" id="msg" placeholder="message" />
      <button id="send">SEND</button>

      <ul id="message"></ul>

      <br /><br /><br /><br />

      <div id="online_users"></div>
    </div>
  -->
    <br />

    <div class="container-fluid">
      <div class="text-center" style="background-color:rgb(245, 255, 252)">
      <img src="1.jpg" alt="" style="height:100px;" /> <br />
     </div>

      <div class="row p-3" id="login_form">
        <div class="col-sm-0 col-md-4"></div>
        <div class="col-sm-12 col-md-4 ">
          <div class="row p-3 d-flex justify-content-center" style="background-color:rgb(233, 233, 233);border-radius:5px" >
            <form >
              <div
                class="form-group"
                
              >
                <label for="exampleInputEmail1">set username</label>
                <input
                  type="text"
                  class="form-control"
                  id="username"
                  aria-describedby="emailHelp"
                  placeholder="Enter username"
                />
                <small id="emailHelp" class="form-text text-muted"
                  >choose an exotic username</small
                >
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Chatroom name</label>
                <input
                  type="text"
                  class="form-control"
                  id="room"
                  placeholder="room name"
                />
              </div>

              <button type="submit" id="submit" class="btn btn-success">
                Submit
              </button>
            </form>
          </div>
        </div>
        <div class="col-sm-0 col-md-4"></div>
      </div>
      <br />

      <div class="row" id="msg_form" style="display:none">
        <div class="col-sm-12 col-md-2" >
          <div class="row p-3  d-flex justify-content-center" style="overflow-y:scroll">
            <div >online users will appear here
              <ul id="online_users"></ul>
            </div>
          </div>
        </div>
        <!--see the number of person's in chat room online-->

        <div class="col-sm-12 col-md-8" >
          <div
            class="row" 
            id=""
            style=
            "margin-left:5px;margin-right:5px;height:500px;
             overflow-y:scroll;"
          >
          <br>
          <ul id="message"></ul>
          </div>
          <div class="row col-sm-12"
           style=
           "margin-left:5px;
            margin-right:5px;
            overflow: hidden;
            margin-top:20px;
            position: fixed;
            bottom: 5;
            ">
           <br>
            <input
              type="text"
              id="msg"
              style="width:800px"
              placeholder="Enter message"
            />
            <button id="send" class="btn btn-primary" style="margin-left:3px">SEND</button>
            <button id="location" class="btn btn-danger" style="margin-left:3px">location</button>
          </div>
        </div>
        <!--all the chats will appear here-->

        <div class="col-sm-12 col-md-2 ">
          <div class="row p-3 text-center  d-flex justify-content-center" >
            <div id="chat_rooms">chat rooms will be here</div>
          </div>
        </div>
        <!--chatroom's name will be here-->
      </div>
    </div>
    
  </body>
</html>
