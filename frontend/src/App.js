// import ListUsers from "./pages/admin/ListUsers";
// import ListProducts from "./pages/ListProducts";
import Layout from './components/Layout';
import Home from './pages/Home.jsx'
import Login from './features/auth/Login';
import SignUp from './pages/SignUp';
import PersistLogin from './features/auth/PersistLogin';
import RequireAuth from './features/auth/RequireAuth';
import { ROLES } from './config/roles'

import Test from './pages/admin/Test';

import AdminBoard from './pages/admin/AdminBoard';

import { Routes, Route } from 'react-router-dom';
import AdminLayout from './components/AdminLayout';
import UsersList from './pages/admin/UsersList';
import EditUser from './pages/admin/EditUser';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<PersistLogin />}>
          <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
            <Route path='adminboard' element={<AdminLayout />} >
              <Route path='users' element={<UsersList />}>
                <Route path=':id' element={<EditUser />} />
              </Route>
            </Route>
          </Route>
        </Route>
      </Routes>

      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="/" element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<SignUp />} />
          <Route element={<PersistLogin />}>
            <Route path='test' element={<Test />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
