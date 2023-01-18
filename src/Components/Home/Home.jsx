import React from 'react'
import "./Home.css"
import maindisplay from "../../media/maindisplay.png"
import image from "../../media/image.png"
import Start from '../Start/Start';
import Initiative from '../Initiative/Initiative';
import GetInTouch from '../GetInTouch/GetInTouch';
import AboutUs from '../AboutUs/AboutUs';
export default function Home() {
    let trademark = String.fromCodePoint(0x02122);
    return (
        <div className='container'>
            <div className="image_container">
                <img className='mainDisplayImage' src={maindisplay} alt="" />
            </div>
            <div className="main_container">
                <div className="about_company_container">
                    <div className='intro'>
                        <div className="about_company">
                            <div className="question">WHO WE ARE</div>
                            {/* <br /> */}
                            <div className="about_company">Rubixe{trademark} is a global technology company specializing in disruptive technologies -  Artificial Intelligence (AI), Machine Learning, Robot Process Automation (RPA), BlockChain, and internet of Things (IoT).
                                <br /><br />
                                Rubixe{trademark} mission is to enable businesses to leverage the full potential of disruptive technologies and stay competitive in the market, turning complex challenges into solutions, providing a strategic competitive advantages that are more efficient, effective and predictable.
                            </div>

                        </div>
                        <div className="company_image">
                            <div className="line"></div>
                            <img src={image} alt="" />
                        </div>
                    </div>



                </div>

            </div>
            <Start />
            <Initiative />
            <GetInTouch />
            <AboutUs />

        </div>
    )
}
