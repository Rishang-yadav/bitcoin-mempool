import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import BlockDetails from './components/BlockDetails';

function App() {

  const [blocks, setBlocks] = useState([]);

  useEffect(() => {
    const fetchBlocks = async () => {
      try {
        const response = await axios.get('https://backendapi-one.vercel.app/blocks');
        console.log(response.data);
        setBlocks(response.data);
      } catch (error) {
        console.error('Error fetching blocks:', error);
      }
    };

    fetchBlocks();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#04020e]">
      <BlockDetails  blocks ={blocks}/>
    </div>
  );
}

export default App;
