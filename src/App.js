import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import AddPage from "./pages/AddPage";
import { AlertProvider } from "./context/alert";

import ProtectedRoute from "./components/ProtectedRoute";




function App() {
  return (
    <>
      <AlertProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/add' element={<AddPage />} />
          <Route path='/register' element={<RegisterPage />} />
        </Routes>
      </AlertProvider>

      {/* <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/main' element=
        {
          <ProtectedRoute
            errorPage={<AccessDenied />}
            targetPage={<NavBar />}
          />
        }>
          <Route path='' element={<HomePage />} />
          <Route path='/add' element={<AddPage />} />
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Routes> */}
  </>
  );
}

export default App;
