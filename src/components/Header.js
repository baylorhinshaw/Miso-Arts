import "../components/Main.css";

function Header() {
    return (
        <div className="Header">
            <div className="column-left">
                <div>Miso</div>
                <div>Marianne Lim</div>  
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