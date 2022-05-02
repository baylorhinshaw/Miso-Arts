import "../components/Main.css";
import misoPortrait from "../images/misoPortrait.png";
import painting17 from "../images/painting17.png";
import painting3 from "../images/painting3.png";
import painting4 from "../images/painting4.png";
import painting8 from "../images/painting8.png";


function HomeContent() {
    return (
        <div className="HomeContent">
            <div className="left-section">
                <img className='tall' alt='miso' src={misoPortrait}></img>
            </div>
            <div className="right-section">
                <img className='square' alt='painting' src={painting17}></img>
                <div>
                    <img className='little-square' alt='painting' src={painting3}></img>
                    <img className='little-square' alt='painting' src={painting4}></img>
                    <img className='little-square' alt='painting' src={painting8}></img>
                </div>
            </div>
        </div>
    );
}

export default HomeContent;