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

  const [title, setTitle] = useState('Example title');
  const [body, setBody] = useState('Example body');

  const addNewPost = (e) => {
    e.preventDefault();

    const newPost = {
      id: Date.now(),
      title,
      body
    };

    setPosts([...posts, newPost]);
  }


  return (
    <div className="App">
      <form>
        <MyInput
         value={title}
         onChange={e => setTitle(e.target.value)}
         type="text"
         placeholder="Название поста"/>
        <MyInput
         value={body}
         onChange={e => setBody(e.target.value)}
         type="text"
         placeholder="Описание поста"/>
        <MyButton onClick={addNewPost}>Создать</MyButton>
      </form>
      <PostList posts={posts} title='Мой пост'/>
    </div>
  );
}

export default App;
