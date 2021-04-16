const Url = "https://jsonplaceholder.typicode.com/users";

export class Api_Service {
  static getTodoList(cb) {
    fetch(Url)
      .then((response) => response.json())
      .then((result) => {
        cb(result);
      })
      .catch((err) => {
        console.trace(err);
      });
  }
}

export default Api_Service;
