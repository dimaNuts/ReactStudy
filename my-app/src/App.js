import React, {useState} from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import MySelect from './components/UI/select/MySelect';
import MyInput from './components/UI/input/MyInput';

function App() {
  const [posts, setPosts] = useState(
    [{id:1, title: 'JavaScript', body: 'Description'}, 
     {id:2, title: 'Java', body: 'First steps'},
     {id:3, title: 'Python', body: 'Basic syntax'},
  ]);
  const [selectedSort, setSelectedSort] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  };

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  };

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    setPosts([...posts].sort((a, b) =>
      a[sort].localeCompare(b[sort])));
  };

  return (
    <div className="App">
      <PostForm create={createPost}/>
      <hr style={{margin: '15px 0'}}/>
      <div>
        < MyInput
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        placeholder='Поиск...'
        />
        <MySelect
        value={selectedSort}
        onChange={sortPosts}
        defaultValue='Сортировка'
        options={[
          {value: 'title', name: 'По названию'},
          {value: 'body', name: 'По описанию'}
        ]}
        />
      </div>
      {posts.length !== 0
       ?
      <PostList remove={removePost}
       posts={posts} title='Мой пост'/>
       :
       <h1 style={{textAlign: 'center'}}>
         Посты не найдены
       </h1>
       }
    </div>
  );
}

export default App;
