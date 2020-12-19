import { Injectable } from '@angular/core';

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  phone: string;
  address?: string;
  date: Date;
}

@Injectable() //{providedIn: 'root'}
export class UserService{

  currentUser : User = UserService.dummyUserList[0];

  static dummyUserList: Array<User> = [
    {
      id: 1,
      name: "Emanuel Jovic",
      email: "test@test.com",
      password: "test1234",
      phone: "065284129",
      date: new Date("2020-06-22 12:51")
    },
    {
      id: 2,
      name: "Igor Jovic",
      email: "tes2@test.com",
      password: "test1234",
      phone: "0633233881",
      date: new Date("2020-06-22 14:32")
    }
  ]

  getUserName(user: User) : string {
    return user.email;
  }

  getUserById(id: number) : User {
    var foundUser: User;
      UserService.dummyUserList.forEach(user => {
      if(user.id == id) {
        foundUser = user;
      }
      });
      this.currentUser = foundUser;
      return foundUser;
  }

  getUser(userEmail: string) : User {
    this.currentUser =  UserService.dummyUserList.find(userToFind => userToFind.email == userEmail);
    return this.currentUser; // postavljamo atribute trenutnog korisnika
  }

  isPasswordCorrect(userEmail: string, password: string) : boolean {
    return UserService.dummyUserList.find(userToFind => (
      userToFind.email == userEmail
      && userToFind.password == password)) != undefined;
  }


  registerUser(name: string, email: string, password: string, phone: string, date: Date) : User {
    var maxId: number = 0;
    UserService.dummyUserList.forEach(user => {
      if (maxId < user.id) {
        maxId = user.id;
      }
    });

    var id = ++maxId;
    var user: User = {id, name, email, password, phone, date};
    UserService.dummyUserList.push(user);

    this.currentUser = user;

    console.log(user);
    return user;
  }

  constructor() { }
}
