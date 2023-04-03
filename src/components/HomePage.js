import { React, useEffect, useState } from 'react'
import Footer from './Footer';
import { useLocation, useNavigate } from "react-router-dom";
import PostsList from './PostsList';

export default function HomePage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const name = location.state.user.name;
  const userId = location.state.user.id;

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
      const jsonData = await response.json();
      setData(jsonData);
    }

    fetchData();
  }, [userId]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100vh' }}>
      <div className='container'>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
          <h1 className='text-light my-4'>Hello {name}</h1>
          <button className='btn btn-primary my-4' onClick={() => {navigate('/')} }>Log Out</button>
        </div>
        <h3 className='text-light'>Posts</h3>
        <PostsList data={data}/>
      </div>
      <Footer />
    </div>
  )
}
