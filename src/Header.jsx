import { useState } from 'react';
import './Header.css';
import SignUp from './SignUp';
import Login from './Login';

const Header = () => {
    const [showSignUp, setShowSignUp] = useState(false);
    const [showLogin, setShowLogin] = useState(false);

    const handleSignUpClick = () => {
        setShowSignUp(true);
    };

    const handleLoginClick = () => {
        setShowLogin(true);
    };

    const handleClose = () => {
        setShowSignUp(false);
        setShowLogin(false);
    };

    return (
        <>
            <nav className="navbar">
                <div className="navbar-brand">Boardo</div>
                <ul className="navbar-menu">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><button onClick={handleLoginClick} className="login-btn">Login</button></li>
                    <li><button onClick={handleSignUpClick} className="signup-btn">Sign Up</button></li>
                </ul>
            </nav>
            {showSignUp && <SignUp onClose={handleClose} />}
            {showLogin && <Login onClose={handleClose} />}
        </>
    );
}

export default Header;
