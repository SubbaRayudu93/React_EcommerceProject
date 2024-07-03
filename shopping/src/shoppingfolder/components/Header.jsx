import React from 'react'

const Header = () => {
  return (
    <div className="headerSection">
        <div className ="left">
            <div className="title">
                <div className="headerBox">
                    <img src="assets/shopping.png" alt="" />
                </div>
            </div>
        </div>
        <div className ="center">
            <ul>
                <li>Men</li>
                <li>Women</li>
                <li>chidren</li>
                <li>Beauty</li>
            </ul>
        </div>
        <div className="search">
            <input type="text" placeholder='Serch..' />
        </div>
        <div className ="right">
            <div className="signIn">
                SignIn / Signup
            </div>
            <div className="cart">
                Cart
            </div>
        </div>
    </div>
  )
}

export default Header