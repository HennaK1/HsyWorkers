import { Route, Routes } from 'react-router-dom';
import NotFoundPage from './pages/NotFound';
import InfoPage from './pages/InfoPage';
import EditPage from './pages/EditInfoPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './theme.css';

function App() {
  return (
    <Routes>
      <Route
        path="/info-page"
        element={
          <>
            <InfoPage />
          </>
        }
      />
      <Route
        path="/info-edit"
        element={
          <>
            <EditPage />
          </>
        }
      />
      <Route path="*" element={<NotFoundPage />}></Route>
    </Routes>
  );
}

export default App;
