import React from 'react'
import "./AboutUs.css"
const menuItems = [
    {
        title: "Home",
        path: "#",
        id: '1'
    },
    {
        title: "Services",
        path: "#",
        id: '2'
    },
    {
        title: "Products",
        path: "#",
        id: '3'
    },
    {
        title: "Carrer",
        path: "#",
        id: '4'
    },
]
export default function AboutUs() {
    let trademark = String.fromCodePoint(0x02122);
    return (
        <div id='about_us'>
            <div className="main_container">
                <div className="about_wrapper">
                    <div className="about_container">
                        <div className="about_title">ABOUT US</div>
                        <div className="about_info">
                            Rubixe{trademark} is a global technology company specializing in disruptive technologies - Artificial Intelligence (AI), Machine Learning, Robot Process Automation (RPA), BlockChain, and internet of Things (IoT). Rubixe{trademark} mission is to enable businesses to leverage the full potential of disruptive technologies and stay competitive in the market.
                        </div>
                    </div>
                    <div className="menu_container">
                        <div className="menu_title">
                            MENU
                        </div>
                        <div className="menu_items">
                            {menuItems.map((e) => {
                                return <a href={e.path} key={e.id} className="menu_items">{e.title}</a>
                            })}
                        </div>
                    </div>
                    <div className="more_container">
                        <div className="more_title">LEARN MORE</div>
                        <a className='aa' href="#" key="about">About</a>
                        <a className='aa' href="#" key="contact">Contact Us</a>
                    </div>
                    <div className="address_container">
                        <div className="address_title">ADDRESS</div>
                        <div className="address_text">
                            Novel Tech Park, 1st Floor, Hosur Rd, <br />
                            Kudlu gate, Bengaluru, Karnataka <br />
                            560068 <br />
                            Phone : 0804-717-8999 <br />
                            Email : hi@rubixe.com <br />
                        </div>
                        <div className="social_container">
                            <div className="social_title">SOCIAL MEDIA</div>
                            <div className="logos">
                                <i class="fa-brands fa-facebook-f"></i>
                                <i class="fa-brands fa-linkedin-in"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
