import React from "react"
import '../../styles/Auth.css'

const Auth = (props)=>{
    const { children } = props;

    return (
        <div className='layout-wrapper' id="login">
        <div className='left'>
            <h1> Book is a window to the world
            </h1>
        </div>
        <div className='right'>{children}</div>
    </div>
    )
}
export default Auth;