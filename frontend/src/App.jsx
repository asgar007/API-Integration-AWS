import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import SignIn from './components/SignIn';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp /> } />
        <Route path="dashboard" element={<Dashboard /> } />
        <Route path="/signin" element={<SignIn />} />
        {/* <Route path="/edit/:id" element={<EditUser />} /> */}
        {/* <Route path='/*' element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;