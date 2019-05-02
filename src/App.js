import React from 'react';
import Profile from './components/Profile/Page'
import CssBaseline from '@material-ui/core/CssBaseline';

const App = () => {
  return (
    <>
      <CssBaseline />
      <div className="App">
        <Profile>
        </Profile>
      </div>
    </>
  );
}

export default App;