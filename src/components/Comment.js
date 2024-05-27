import React from 'react'

export default function Comment(props) {
  if (!props.data) {
    return <div className='text-light mx-4'>Loading...</div>;
  }
  return (
    <div>
      {props.data.map((comment, index) => (
        <div className='mx-4' key={comment.id}>
          <p className='text-light my-2'><strong>Comment {index + 1}</strong></p>
          <p className='text-light mx-4'><strong>Name:</strong> {comment.name}</p>
          <p className='text-light mx-4'><strong>Email:</strong> {comment.email}</p>
          <p className='text-light mx-4'><strong>Comment:</strong> {comment.body}</p>
        </div>
      ))}
    </div>
  );
}
