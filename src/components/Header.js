import "../components/Main.css";

function Header() {
    return (
        <div className="Header">
            <div className="column-left">
                <h1>Miso</h1>
                <h2>Marianne Lim</h2>  
            </div>
            <div className="column-right">
                <a href="#">About</a>
                <a href="#">Work</a>
                <a href="#">Makeup</a>
            </div>
        </div>
    );
}

export default Header;