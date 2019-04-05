import Person from "../../models/Person";

export default class PersonClient {
  private readonly token: string;
  constructor(token: string) {
    this.token = token;
  }

  get(query: object): Promise<Person> {
    return new Promise((resolve, reject) => resolve())
  } 
}