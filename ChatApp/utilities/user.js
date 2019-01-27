/*[
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
      this.users = this.users.filter(function(obj) {
        obj.id !== id;
      });
    }
    return user; //returning the removed user
  }

  getUser(id) {
   /* console.log("never mind "+id)
    for(var i=0;i<this.users.length;i++){
      if(this.users[i].id===id){
        return this.users[i];
        break;
      }
    }
    return undefined;*/
    /*
    return this.users.filter((user) => user.id === id)[0]
  }

  getUserList(room) {
    var users=this.users.filter((user)=>user.room===room);
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
*/
/*
module.exports = {
  Users
};
*/
[{
  id: '/#12poiajdspfoif',
  name: 'Andrew',
  room: 'The Office Fans',
  pic:'1.jpg'
}]

// addUser(id, name, room)
// removeUser(id)
// getUser(id)
// getUserList(room)

class Users {
  constructor () {
    this.users = [];
  }
  addUser (id, name, room, pic) {
    var user = {id, name, room, pic};
    this.users.push(user);
    return user;
  }
  removeUser (id) {
    var user = this.getUser(id);

    if (user) {
      this.users = this.users.filter((user) => user.id !== id);
    }

    return user;
  }
  getUser (id) {
    return this.users.filter((user) => user.id === id)[0]
  }
  
  getUserList (room) {
    var users = this.users.filter((user) => user.room === room);
    var namesArray = users.map((user) => user.name);
    var obj=[];
    for(var i=0;i<this.users.length;i++){
       if(this.users[i].room==room){
         obj.push(this.users[i]);
       }
    }
    console.log(obj);
    return obj;
  }
}

module.exports = {Users};

 // class Person {
 //   constructor (name, age) {
 //     this.name = name;
 //     this.age = age;
 //   }
 //   getUserDescription () {
 //     return `${this.name} is ${this.age} year(s) old.`;
 //   }
 // }
 //
 // var me = new Person('Andrew', 25);
 // var description = me.getUserDescription();
 // console.log(description);
