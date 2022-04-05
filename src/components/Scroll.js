import HorizontalScroll from "react-scroll-horizontal";
import "../components/Main.css";

function Scroll() {

const child = { width: '300em', height: '100%' }

    return (
        <div className="Scroll">
            <HorizontalScroll>
                <div className='main'>
                    <h1>Hello World 1</h1>
                </div>
                <div className='main'>
                    <h1>Hello World 2</h1>
                </div>
                <div className='main'>
                    <h1>Hello World 3</h1>
                </div>
                <div className='main'>
                    <h1>Hello World 4</h1>
                </div>
            </HorizontalScroll>
        </div>
    );
}

export default Scroll;