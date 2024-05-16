import './Header.css';

const Header = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">Boardo</div>
            <ul className="navbar-menu">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#signup" className="signup-btn">Sign Up</a></li>
            </ul>
        </nav>
    );
}

export default Header;
