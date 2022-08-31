import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '@pages/Home';
import Auth from '@pages/Auth';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/todo" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="*" element={<Navigate to="/todo" replace />} />
      </Routes>
    </>
  );
};

export default App;
