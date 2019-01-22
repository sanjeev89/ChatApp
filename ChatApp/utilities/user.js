[
  {
    id: "socketIDnbgghbjbjh",
    name: "user_name",
    room: "room_name"
  }
];

class Users {
  constructor() {
    this.users = [];
  }

  addUser(id, name, room) {
    var user = { id, name, room };
    this.users.push(user);
    return user;
  } //added user ko return bhi krta h

  removeUser(id) {
    var user = this.getUser(id);
    if (user) {
      this.users = this.users.filter(function(user) {
        user.id !== id;
      });
    }
    return user; //returning the removed user
  }

  getUser(id) {
    console.log("never mind "+id)
    for(var i=0;i<this.users.length;i++){
      if(this.users[i].id===id){
        return this.users[i];
        break;
      }
    }
    return undefined;
  }

  getUserList(room) {
    var users=this.users.filter((user)=>user.room===room)
    var NamesArray=users.map((user)=>user.name)
    return NamesArray; //return the names of users present in a room
  }

  showUsers(){
    for(var i=0;i<this.users.length;i++)
    {
      console.log(this.users[i]);
    }
  }

}


module.exports = {
  Users
};
