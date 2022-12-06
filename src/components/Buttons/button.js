import DeleteIcon from '../../assets/icons/deleteicon.png'
import ShareIcon from '../../assets/icons/shareicon.png'
import './button.styles.css'


//utils
const Icon = (src = null)=>(src && <span>{<img src={src} alt=""/>}</span>)

const btnProps = (handler, type, bg=null, disabled)=>({
    className: 'button',
    onClick:handler, 
    style: bg ? {backgroundColor: '#EE2A7B', border: 'none', color: 'white'}: {},
    type,
    disabled
})
//utils ends here:::

export function Button ({
    children="",
    handler,
    imagesrc = null,
    type="",
    disabled,
    bg
}){ 
    return <button {...btnProps(handler, type, bg, disabled)}>
        <Icon src={imagesrc} />
        <span>{children}</span>
    </button>
}

export function PsuedoButton ({
    bg=null,
    children,
    handler,
    imagesrc,
    disabled
}){
    return <div {...btnProps(handler,null,bg, disabled)}>
        <Icon src={imagesrc}/>
        <span>{children}</span>
</div>
}

export const DeleteButton = ({disabled})=><Button imagesrc={DeleteIcon} disabled={disabled} bg={false}>Delete</Button>
export const ShareButton = ({disabled})=><Button imagesrc ={ShareIcon} bg='true' type='submit' disabled={disabled}>
    Share
</Button>
