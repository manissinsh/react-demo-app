import React, { useState } from 'react';
import TodoItem from './TodoItem';
import axios from 'axios';

const fetchUrl = "https://jsonplaceholder.typicode.com/posts"
const postUrl = "https://jsonplaceholder.typicode.com/posts"

export default function TodoList() {

  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  async function fetchPosts() {
    await axios.get(`${fetchUrl}`)
    .then((res) => {
      console.log(res.data);
      setTodos(res.data);
    })
  }

  async function addPost() {
    let newId = todos.length + 1

    console.log("dfghjk");
    await axios.post(`${postUrl}`, {
      id: newId,
      userId: Math.random()*10,
      title: title,
      body: content,
    })
    .then((res) => {
      console.log(res.data)
      //let newPost = res.data
      //todos.push({title: newPost.title, body: newPost.data})
      todos.push(res.data)
      setContent('')
      setTitle('')
    })
  }

  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h2>Todo List</h2>
      
      <button onClick={fetchPosts}>Fetch Posts</button>
      <br /><br />
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Title"
      />
      <br /> <br />
      <input
        type="text"
        value={content}
        onChange={e => setContent(e.target.value)}
        placeholder="Content"
      />
      <br />
      <br />
      <button onClick={addPost}>Add Post</button>
      
      {todos.length === 0 ? (
        <p>No todos yet!</p>
      ) : (
        <ul>
          {todos.map((todo, index) => (
            <TodoItem
              key={index}
              todo={todo}
              onDeleteTodo={handleDeleteTodo}
            />
          ))}
        </ul>
      )}
    </div>
  )
}
