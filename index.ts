import axios from "axios";

const url: string = "https://jsonplaceholder.typicode.com/todos/1";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((resp) => {
  const todo = resp.data as Todo;
  let id = todo.id;
  let title = todo.title;
  let completed = todo.completed;
  console.log(id, title, completed);
});

//Built in objects - declarations
let now: Date = new Date();
let someArray: string[] = ["one", "two", "three"];
