import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function PostsList(props) {
  const navigate = useNavigate();

  if (!props.data) {
    return <div className='text-light'>Loading...</div>;
  }
  return (
    <div>
      {props.data.map((post, index) => (
        <div className='mx-4' key={post.id}>
          <h5 className='text-light'>Post {index + 1}</h5>
          <p className='text-light mx-4'><strong>Title:</strong> {post.title}</p>
          <p className='text-light mx-4'><strong>Description:</strong> {post.body}</p>
          <button className='btn btn-primary mx-4 mb-4' onClick={() => { navigate(`/show/${post.id}`, { state: { post: post } }) }}>Show</button>
        </div>
      ))}
    </div>
  );
}
