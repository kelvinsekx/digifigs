import {AlertTemplate} from './AlertTemplate'
import {PsuedoButton} from './Buttons'

const redirectToSignup = function ({
    navigate
}){
    return <AlertTemplate navigate={navigate}>
        <>
            <p style={{color:'white'}}>Hi there! Kindly sign up to continue using Giftly and share your wishlist with your family and friends.</p>
            <div style={{display:'flex', gap: '1rem', padding: '1rem 0'}}>
                <PsuedoButton handler={()=>navigate.to('home')}>
                    Cancel
                </PsuedoButton>
                <PsuedoButton 
                    bg={true} 
                    handler={()=>navigate.to('signup')}
                >Signup</PsuedoButton>
            </div>
        </>
    </AlertTemplate>
}

export default redirectToSignup;