import PersonClient from "./Person";

export default class Client{

  person: PersonClient;
  
  constructor(token: string) {
    this.person = new PersonClient(token);
  }

}