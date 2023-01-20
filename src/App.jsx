import { Dashboard, Login, Error } from './pages';
import { Route, Routes } from 'react-router-dom';
import { GithubProvider } from './context/context';
import { AuthContextProvider } from './context/authContext';

function App() {
  return (
    <Routes>
      <Route path='/' element={<GithubProvider><Dashboard /></GithubProvider>} />
      <Route path='/login' element={<AuthContextProvider><Login /></AuthContextProvider>} />
      <Route path='*' element={<Error />} />
    </Routes>
  )
}

export default App
