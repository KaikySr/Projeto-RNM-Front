import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/not' element={<NotFoundPage />} />
      </Routes>

      
      {/* <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/main' element={
          <ProtectedRoute
            errorPage={<AccessDenied />}
            targetPage={<NavBar />}
          />
        }>
          <Route path='' element={<HomePage />} />
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Routes> */}
  </>
  );
}

export default App;
