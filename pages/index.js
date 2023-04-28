import axios from 'axios';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    axios.post('/api/set-cookie', { cookie: 'This is a cookie' });
  }, []);

  return <h1>Look in the console for the error</h1>;
}
