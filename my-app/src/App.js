import React, {useState} from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';


function App() {
  const [posts, setPosts] = useState(
    [{id:1, title: 'JavaScript', body: 'Description'}, 
     {id:2, title: 'Java', body: 'Description'},
     {id:3, title: 'Python', body: 'Description'},
  ]);


  return (
    <div className="App">
      <form>
        <MyInput type="text" placeholder="Название поста"/>
        <MyInput type="text" placeholder="Описание поста"/>
        <MyButton>Создать</MyButton>
      </form>
      <PostList posts={posts} title='Мой пост'/>
    </div>
  );
}

export default App;
