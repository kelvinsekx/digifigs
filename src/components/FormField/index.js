import './formfield.styles.css'

export const FormField = ({
    title,
    details,
    children
})=>(
    <div className='formfield'>
        <p className='label'>{title}</p>
        <p>{details}</p>
        <div>{children}</div>
    </div>
)