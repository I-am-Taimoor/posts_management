import { React, useEffect, useState } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import Comment from './Comment';
import Footer from './Footer';

export default function ShowPost() {
  const [data, setData] = useState(null);
  const location = useLocation();
  const { id } = useParams();
  const post = location.state.post;

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
      const jsonData = await response.json();
      setData(jsonData);
    }

    fetchData();
  }, [id]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100vh' }}>
      <div className='container my-4'>
        <h3 className='text-light'>Post Details</h3>
        <p className='text-light mx-4'><strong>Title:</strong> {post.title}</p>
        <p className='text-light mx-4'><strong>Description:</strong> {post.body}</p>
        <h5 className='text-light mx-4'>Comments:</h5>
        <Comment data={data} />
      </div>
      <Footer/>
    </div>
  )
}
