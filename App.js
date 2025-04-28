import { useEffect } from 'react';
import { initDB } from './db';

export default function App() {
  useEffect(() => {
    initDB();
  }, []);
  // ...rest code
}
