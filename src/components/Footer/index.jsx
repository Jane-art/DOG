import React from "react";
import Logo from "../Logo";
import "./index.css";

const Footer =() => {
    return (
        <footer>
            <div>
                <Logo/>
                <p>&copy;2022</p>
                </div>
                <ul>
                    <li><a href="">link</a></li>
                    <li><a href="">link</a></li>
                    <li><a href="">link</a></li>
                    <li><a href="">link</a></li>
                </ul>
                <ul>
                    <li><a href="">link</a></li>
                    <li><a href="">link</a></li>
                    <li><a href="">link</a></li>
                    <li><a href="">link</a></li>
                </ul>
                <div>
                   <h4>Мы на связи</h4> 
                   <p>tel</p>
                   <p>email</p>
                   <ul className="soc">
                       <li><a href="">soc</a></li>
                       <li><a href="">soc</a></li>
                       <li><a href="">soc</a></li>
                       <li><a href="">soc</a></li>
                       <li><a href="">soc</a></li>
                   </ul>
                </div>
        </footer>
    )
}

export default Footer;