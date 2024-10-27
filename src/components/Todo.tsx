import { useState } from 'react';
import './style.css';

export default function Todo() {
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<string[]>([]);

  const todoHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const submitTodoHandler = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTodos([...todo, e.target.value]);
  };

  return (
    <div className='main-todo'>
      <div className='todo'>
        <p>오늘의 할일</p>
        <form action='submit' onSubmit={submitTodoHandler}>
          <input
            type='text'
            placeholder='오늘의 할일을 적으세요'
            value={todo}
            onChange={todoHandler}
          />
          <button>submit</button>
        </form>
        {todos ? todos.map((todo, index) => <li key={index}>{todo}</li>) : ''}
      </div>
    </div>
  );
}
