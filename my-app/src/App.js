import React, {useState} from 'react';
import './styles/App.css';
import PostList from './components/PostList';

function App() {
  const [posts, setPosts] = useState(
    [{id:1, title: 'JavaScript', body: 'Description'}, 
     {id:2, title: 'Java', body: 'Description'},
     {id:3, title: 'Python', body: 'Description'},
  ]);


  return (
    <div className="App">
      <form>
        <input type="text" placeholder="Название поста"/>
        <input type="text" placeholder="Описание поста"/>
        <button>Создать</button>
      </form>
      <PostList posts={posts} title='Мои посты'/>
    </div>
  );
}

export default App;
