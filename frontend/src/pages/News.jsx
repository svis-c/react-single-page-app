import React, { useState, useEffect } from 'react';
import '../styles/news.css';

const News = () => {
  //state
  const [posts, setPosts] = useState([]);

  // side efects
  useEffect(() => {
    getData('https://jsonplaceholder.typicode.com/posts');
  }, []);

  //custom function
  const getData = async (API) => {
    const response = await fetch(API);
    const data = await response.json();

    setPosts(data.slice(0, 2));
    console.log(data);
  };

  return (
    <main>
      <h1>News</h1>
      <div className='news'>
        {posts.map((post) => {
          return (
            <>
              <div className='newsBox'>
                <h3>
                  {post.title.charAt(0).toUpperCase() + post.title.slice(1)}
                </h3>
                <p>{post.body.charAt(0).toUpperCase() + post.body.slice(1)} </p>
              </div>
            </>
          );
        })}
      </div>
    </main>
  );
};

export default News;
