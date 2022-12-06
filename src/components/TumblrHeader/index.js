import Logo from '../../assets/icons/logo.png'
import './tumblrheader.styles.css'

export const TumblrHeader = ({
    aside = null,
    title,
    reverse
})=> (
    <div className='tumblrheader'>
        <img src={Logo} alt="company's logo" width={28} height={48}/>
        <div className='tumblrheader' style={ reverse && {flexDirection:"column-reverse"}}>
            {aside && <p>{aside}</p>}
            <h2>{title}</h2>
        </div>
    </div>
)