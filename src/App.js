import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import AboutUs from './pages/AboutUs.jsx';
import ContactUs from './pages/ContactUs.jsx';
import FeesPage from './pages/FeesPage.jsx';
import Login from './pages/Login.jsx';
import NavBar from "./pages/Navbar.jsx";
import Profile from './pages/Profile.jsx';
import Register from './pages/Register.jsx';
import StartPage from './pages/StartPage.jsx'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={
            <Layout isSideBar={false}>
              <StartPage />
              <AboutUs />
              <ContactUs />
            </Layout>
          }
          />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/home' element={<Layout>
            <Profile />
          </Layout>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
