import './tumblr.styles.css'
import ClosedSquare from '../../assets/icons/close-square.png'

export const Tumblr = ({header, body})=>(
<div className='tumblr'>
    <img src={ClosedSquare} width="24" height={'24'} alt='' />
    {header}
    {body}
</div>
) 

