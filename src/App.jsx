import { Dashboard, Error } from './pages';
import { Route, Routes } from 'react-router-dom';
import { GithubProvider } from './context/context';

function App() {
  return (
    <Routes>
      <Route path='/' element={<GithubProvider><Dashboard /></GithubProvider>} />
      <Route path='*' element={<Error />} />
    </Routes>
  )
}

export default App
