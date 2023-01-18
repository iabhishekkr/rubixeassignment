import React from 'react'
import logo from "../../media/logo.png"
import "./Header.css"
const nav_links = [
    {
        path: '#home',
        display: 'HOME',
        id: 1
    },

    {
        path: '#services',
        display: 'SERVICES',
        id: 2
    },
    {
        path: '#products',
        display: 'PRODUCTS',
        id: 3
    },
    {
        path: "#ai_internship",
        display: 'AI INTERNSHIP',
        id: 4
    },
    {
        path: "#career",
        display: 'CAREER',
        id: 5
    },
    {
        path: "blog",
        display: 'BLOG',
        id: 6
    },
    {
        path: "#about",
        display: 'ABOUT',
        id: 7
    },
    {
        path: "contact",
        display: 'CONTACT US',
        id: 8
    }
];
export default function Header() {
    return (
        <div >
            <header className='head'>
                <div className="logo_container">
                    <div className="logo">
                        <img className='img' src={logo} alt="" />
                    </div>
                    <div className="title">
                        <div className="name">Rubixe</div>
                        <div className="tag">Disruptive Technologies at Work</div>
                    </div>
                </div>
                <div className="navlink_container">
                    {nav_links.map((e) => {
                        return <a href={e.path} key={e.id} className="nav_link">{e.display}</a>
                    })}
                </div>
            </header>
        </div>
    )
}
