import React, {useMemo, useState} from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';

function App() {
  const [posts, setPosts] = useState(
    [{id:1, title: 'JavaScript', body: 'Description'}, 
     {id:2, title: 'Java', body: 'First steps'},
     {id:3, title: 'Python', body: 'Basic syntax'},
  ]);
  const [filter, setFilter] = useState(
    {sort: '', query: ''});

  const sortedPosts = useMemo(() => {
    console.log('отсортированы!!!');
    if (filter.sort) {
      return [...posts].sort((a, b) =>
      a[filter.sort].localeCompare(b[filter.sort]));
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(
      post => post.title.toLowerCase()
      .includes(filter.query.toLowerCase()))
  }, [filter.query, sortedPosts]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  };

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  };

  return (
    <div className="App">
      <PostForm create={createPost}/>
      <hr style={{margin: '15px 0'}}/>
      <PostFilter
       filter={filter}
       setFilter={setFilter}
      />
      <PostList remove={removePost}
       posts={sortedAndSearchedPosts}
       title='Мой пост'/>
    </div>
  );
}

export default App;
