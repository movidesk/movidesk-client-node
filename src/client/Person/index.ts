import Person from "../../models/Person";
import Filters from "../utils/Filters";
import api from "../../services/api";

export default class PersonClient {
  private readonly _token: string;
  private readonly _prefix: string;

  constructor(token: string) {
    this._token = token;
    this._prefix = "/persons";
  }

  get(query?: Filters): Promise<Person[]> {
    const response = api
      .get(this._prefix, {
        params: {
          token: this._token
        }
      })
      .then(res => res.data);

    return response;
  }

  getById(id: number | string): Promise<Person> {
    const response = api
      .get(this._prefix, {
        params: {
          id,
          token: this._token
        }
      })
      .then(res => res.data);

    return response;
  }

  post(person: Person): Promise<Person> {
    const response = api
      .post(this._prefix, person, {
        params: {
          token: this._token
        }
      })
      .then(res => res.data);

    return response;
  }

  patch(id: number | string, person: Person): void {
    api
      .patch(this._prefix, person, {
        params: {
          id,
          token: this._token
        }
      })
      .then(res => res.data);
  }
}
