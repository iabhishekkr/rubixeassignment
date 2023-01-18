import React from 'react'
import "./Initiative.css"
import icon1 from "../../media/icon1.png";
import icon2 from "../../media/icon2.png";
import icon3 from "../../media/icon3.png";
import icon4 from "../../media/icon4.png";
import icon5 from "../../media/icon5.png";

export default function Initiative() {
    let registered = String.fromCodePoint(0x000AE);
    return (
        <div id='initiative'>
            <div className="main_container">
                <div className="question">
                    TECH FOR TEENS - A RUBIXE {registered} INITIATIVE
                </div>
                <div className="box-container">

                    <div className="box box1">
                        <div className="heading" style={{ backgroundColor: "rgb(29,45,96)" }}><span className='count' style={{ color: "rgb(29,45,96)" }}>01</span></div>
                        <div className="icon"><img src={icon1} alt="" /></div>
                        <div className="text">Introducing AI to children in an age appropriate manner</div>
                    </div>
                    <div className="gradient1"></div>

                    <div className="box box2">
                        <div className="heading" style={{ backgroundColor: "rgb(157,33,87)" }}><span className='count' style={{ color: "rgb(157,33,87)" }}>02</span></div>
                        <div className="icon"><img src={icon2} alt="" /></div>
                        <div className="text" style={{ textAlign: "center" }}>Gain awareness on AI and build an interactive story around it</div>
                    </div>
                    <div className="gradient2"></div>

                    <div className="box box1">
                        <div className="heading" style={{ backgroundColor: "rgb(227,94,19)" }}><span className='count' style={{ color: "rgb(227,94,19)" }}>03</span></div>
                        <div className="icon"><img src={icon3} alt="" /></div>
                        <div className="text">Acquire programming skills in a user-friendly format</div>
                    </div>
                    <div className="gradient1"></div>

                    <div className="box box2">
                        <div className="heading" style={{ backgroundColor: "rgb(25,91,55)" }}><span className='count' style={{ color: "rgb(25,91,55)" }}>04</span></div>
                        <div className="icon"><img src={icon4} alt="" /></div>
                        <div className="text">Exposure to mini projrcts on diverse topics</div>
                    </div>
                    <div className="gradient2"></div>

                    <div className="box box1">
                        <div className="heading" style={{ backgroundColor: "rgb(183,125,51)" }}><span className='count' style={{ color: "rgb(183,125,51)" }}>05</span></div>
                        <div className="icon"><img src={icon5} alt="" /></div>
                        <div className="text">Train the teachers programme</div>
                    </div>
                    <div className="gradient1"></div>
                </div>
            </div>

        </div>
    )
}
