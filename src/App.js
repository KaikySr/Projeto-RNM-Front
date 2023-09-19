import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddPostPage from './pages/AddPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { AlertProvider } from './context/alert';
import './App.css';
import ProtectedRoute from './pages/ProtectedRoute';
import { AccessDenied } from './pages/AccessDenied';
import NavBar from './components/navbar';
import NotFoundPage from './pages/NotFoundPage';
function App() {
  return (
    <>
      <AlertProvider>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/home' element={
            <ProtectedRoute
              errorPage={<AccessDenied />}
              targetPage={<NavBar />}
            />
          }>
            <Route path='' element={<HomePage />} />
            <Route path='add' element={<AddPostPage />} />
          </Route>
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </AlertProvider>
    </>
  );
}
export default App;