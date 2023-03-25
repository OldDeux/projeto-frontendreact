import React from 'react'
import { HeaderStyle } from './HeaderStyle'
import logo from '../../assents/logo.png'

const Header = () => {

    return (
            <HeaderStyle>
                <img src={logo} width={80}height={80}/>
                <h2>LabeSpace</h2>
            </HeaderStyle>
    )
}

export default Header