import axios from 'axios';
import * as https from 'https';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

const httpsAgent = new https.Agent({
  rejectUnauthorized: false,
});

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url, { httpsAgent }).then((response) => {
  const todo = response.data as Todo;

  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  logTodo(id, title, completed);
});

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
  The Todo with ID: ${id}
  Has a title of: ${title}
  Is it completed: ${completed}
`);
};
