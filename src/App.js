import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Register from './pages/Register'
import Login from './pages/Login'
import Post from './pages/Post'
import UserPanel from './pages/UserPanel'
import CreatePost from './pages/CreatePost'
import PrivateRoute from './components/PrivateRoute'
import './App.css'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/post' element={<Post />} />
          <Route path='/userpanel' element={<PrivateRoute />}>
            <Route path='/userpanel' element={<UserPanel />} />
          </Route>
          <Route path='/userpanel' element={<PrivateRoute />}>
            <Route path='/userpanel/create' element={<CreatePost />} />
          </Route>
        </Routes>
      </Router>

    </>
  );
}

export default App;
