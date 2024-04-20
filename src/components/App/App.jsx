import { useState } from 'react';
import Header from '../Header/Header'
import Main from '../Main/Main';
import Footer from '../Footer/Footer'
import { Route, Routes } from 'react-router-dom';

function App() {

  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className='page'>

    <Routes>

      <Route path='/signin' element={
        <Main name='signin' setLoggedIn={setLoggedIn} />
      } />

      <Route path='/signup' element={
        <Main name='signup' setLoggedIn={setLoggedIn} />
      } />

      <Route path='/' element={
        <>
          <Header name='homepage' loggedIn={loggedIn} />
          <Main name='homepage' />
          <Footer />
        </>
      } />

      <Route path='/movies' element={
        <>
          <Header loggedIn={loggedIn}/>
          <Main name='movies' />
          <Footer />
        </>
      } />

      <Route path='/saved-movies' element={
        <>
          <Header loggedIn={loggedIn}/>
          <Main name='saved-movies' />
          <Footer />
        </>
      } />

      <Route path='/profile' element={
        <>
          <Header loggedIn={loggedIn}/>
          <Main name='profile' setLoggedIn={setLoggedIn} />
        </>
      } />

      <Route path='*' element={
        <>
          <Main name='notFoundError'/>
        </>
      } />

    </Routes>

    </div>
  );
}



export default App;
