<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="style.css">


    <title>Document</title>
  </head>
  <body>
  <div class="container-fluid">
    <div class="text-center" style="background-color:rgb(245, 255, 252)">
    <img src="1.jpg" alt="" style="height:100px;" /> <br />
   </div>


  <div id="online_users" style="border:1px solid red;" ></div>
  <br>

  <form action="">
    <input type="text" id="msg"><br>
    <button id="send">send</button>
  </form>

  <div id="message" style="border:1px solid red;"></div>
  <br><br><br> 
  <div class="container-fluid">
   <div class="row " style="border:1px solid red;">    <!--username start here-->
    <div class="col-md-3 col-sm-3 flex-container text-center" id="online_users">
        <div class="text-center " id="username-box">hello world</div>
        <br>
    </div>     <!--username end here -->

    <div class="col-sm-9 col-md-9 message" id="message">
      
      <div class=" clearfix mt-4">        <!--rightbox data-->
        <div class=" float-right message-box-right p-4" style="border:1px solid rgb(233, 21, 56);width:60%;">
              <h6>name of user</h6>
              <div class="d-inline-flex float-right" style="border:1px solid pink;">
               <h5> hello from right</h5>
              </div>
              <h6 class="float-right">time</h6>
        </div>
      </div> <!--rightbox data-->
             
      <div class=" clearfix mt-4">        <!--leftbox data-->
        <div class=" float-left message-box-left p-4" style="border:1px solid rgb(233, 21, 56);width:60%; ">
              <h6>name of user</h6>
              <div class="d-inline-flex float-left" style="border:1px solid pink;">
               <h5>hello from left</h5>
              </div>
              <h6 class="float-right">time</h6>
        </div>
      </div>       <!--leftbox data ends here-->
     <br>

     <div class="row ">   <!--input box + buttons-->
       <div class="col-md-9 col-sm-12 ">
        <input type="text" id="msg" class="col-md-12 col-sm-12 b p-1" placeholder="type your message here" style="height:45px;width:102%;">
       </div>
       <div class="col-md-1 col-sm-12 b p-1">
         <button class="btn btn-md btn-primary col-md-12 col-sm-12" id="send">send</button>
       </div> 
       <div class="col-md-2 col-sm-12 p-1 b">
         <button class="btn btn-md btn-danger col-md-12 col-sm-12">Location Message</button>
       </div>  
       <br>   
     </div>  <!--input box + buttons ends here-->
     <br>

  </div>
  <br>


  
  
  
  </div>
</div>








</body>
 <script
  src="https://code.jquery.com/jquery-3.3.1.js"
  integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60="
  crossorigin="anonymous"
></script>
<script 
 src="/socket.io/socket.io.js">
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
<script src="./moment.js"></script>
<script src="./deparam.js"></script>
<script src="script.js"></script>
<script
  src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"
  integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
  crossorigin="anonymous"
></script>

</html>
