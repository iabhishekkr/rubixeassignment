import React, { useEffect, useState } from 'react'
import "./GetInTouch.css"
export default function GetInTouch() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState();
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState("");
    const [mobileError, setMobileError] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const regexExp = RegExp(/^\S+@\S+\.\S+$/);
    const clickHandler = (e) => {
        e.preventDefault();
        setSubmitted(true);
        if (name === "")
            setNameError(true);
        if (!regexExp.test(email))
            setEmailError(true);
        if (!mobile || mobile.length != 10) {
            setMobileError(true);
        }
    }
    return (
        <div id='getInTouch'>
            <div className="main_container">
                <div className="wrapper">
                    <div className="left">
                        <div className="main_title">GET IN TOUCH</div>
                        <div className="instruction">
                            Please complete the form and we will get back to you
                        </div>

                    </div>
                    <div className="right">
                        <div className="form_container">
                            <form action="">
                                <div className="name_container">
                                    <label htmlFor="name">Name<span>*</span></label> <br />
                                    <input type="text" id='name' className='namee inp' value={name} required onChange={(e) => {
                                        setName(e.target.value);
                                        if (nameError) setNameError(false);
                                    }} />
                                    {nameError && <div className="error name_error">Please Enter Your Name</div>}
                                </div>
                                <div className="email_container">
                                    <label htmlFor="email">Email<span>*</span></label> <br />
                                    <input type="email" id='email' className='email inp' value={email} required onChange={(e) => {
                                        setEmail(e.target.value)
                                        if (emailError) setEmailError(false);
                                    }} />
                                    {emailError && <div className="error email_error">Please Enter Valid Email</div>}
                                </div>
                                <div className="mobile_container">
                                    <label htmlFor="number">Mobile Number<span>*</span></label> <br />
                                    <input type="number" id='mobile' className='mobile inp' value={mobile} required onChange={(e) => {
                                        setMobile(e.target.value);
                                        if (mobileError) setMobileError(false);
                                    }} />
                                    {mobileError && <div className="error mobile_error">Please Enter Valid Mobile Number</div>}
                                </div>
                                <br />
                                <button className='register' onClick={clickHandler}>Register Now</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
