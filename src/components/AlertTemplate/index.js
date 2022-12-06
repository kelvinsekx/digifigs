import './alerttemplate.styles.css'
import logo from '../../assets/icons/logo.png'

import {PsuedoButton} from "./../Buttons"

export function AlertTemplate ({
    children = 'this can not be empty',
    navigate
}){
    return <div className="alert-template">
        <div className='link'>
            <PsuedoButton handler={()=>navigate.to('home')}>Go back to site</PsuedoButton>
        </div>
        <div className='alert-main'>
            <div>
                <div>
                    <img src={logo} width="28.37px" height="48px"/>
                </div>
                <div>
                    {children}
                </div>
            </div> 
        </div>
    </div>
}