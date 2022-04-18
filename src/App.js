import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import app from './firebase.init';

function App() {
    return (
        <div className="App">
        <Header></Header>
            <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/home' element={<Home></Home>}></Route>
                <Route path='/login' element={<Login></Login>}></Route>
                <Route path='/register' element={<Register></Register>}></Route>
            </Routes>
            <Footer></Footer>
        </div>
    );
}

export default App;
