import React from 'react';
import PostItem from './PostItem';


const PostList = ({posts, title, remove}) => {
  if (!posts.length) {
    return (
      <h1 style={{textAlign: 'center'}}>
        Посты не найдены
      </h1>
    )
  }

  return (
    <div>
      <h1 text={{textAlign: 'center'}}>{title}</h1>
        
      {posts.map(
        (post, index) => <PostItem number={index + 1}
         remove={remove}
         post={post} 
         key={post.id}/>
      )}
    </div>
  );
};

export default PostList;
