import React, {useState} from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';

function App() {
  const [posts, setPosts] = useState(
    [{id:1, title: 'JavaScript', body: 'Description'}, 
     {id:2, title: 'Java', body: 'Description'},
     {id:3, title: 'Python', body: 'Description'},
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  };

  return (
    <div className="App">
      <PostForm create={createPost}/>
      <PostList posts={posts} title='Мой пост'/>
    </div>
  );
}

export default App;
