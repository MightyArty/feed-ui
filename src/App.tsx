import React from 'react';
import NavBar from './components/NavBar.tsx';
import Feed from './components/Feed.tsx';

const App: React.FC = () => {
  return (
    <div className="App">
      <NavBar />
      <Feed />
    </div>
  );
};

export default App;
