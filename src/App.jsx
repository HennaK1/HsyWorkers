import { Route, Routes } from 'react-router-dom';
import NotFoundPage from './pages/NotFound';
import InfoPage from './pages/InfoPage';
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
      <Route path="*" element={<NotFoundPage />}></Route>
    </Routes>
  );
}

export default App;
