import maximizeIcon from '../../assets/icons/maximize.png'
import linkIcon from '../../assets/icons/link.png'
import rectangle from '../../assets/icons/Rectangle.png'
import {FormInput} from '../FormInput'

import './wyswyg.styles.css'

export const Wyswyg = ({
    wishName="Purchase link",
    onChangeHandler= f=>f
})=> <div className="card">
    <div className='flex space-btw'>
        <div className='flex'>
            <img src={rectangle} alt="" width={'10px'} height={'10px'}/>
            <FormInput 
                placeholder='Wish name' 
                name='wishName' 
                onChangeHandler ={onChangeHandler} 
                styles={{
                    label:{paddingLeft: '2px'},
                    input:{paddingLeft: '3px'}
                }}
            />
        </div>
        <img src={maximizeIcon} alt="" width={'10px'} height={'10px'}/>
    </div>
    <div style={{paddingLeft:'1rem'}}>
    <div className='flex gap'>
        <img src={linkIcon} alt="" width={'10px'} height={'10px'}/>
        <input 
            className='readonly forminput' 
            value={wishName ? 'https://puristorganics.com/'+wishName.replace(/ /g, '-') : 'Purchase link'} 
            readOnly={true}
            style={{padding: '1px'}} 
        />
    </div>
    {
        wishName && <div>
            <div className='flex gap'>
                <select value="$">
                    {options.map(option=>
                        <option value={option}>
                            {option}
                        </option>)}
                </select>
                <FormInput 
                    placeholder='price (optional)' name='amount' 
                    onChangeHandler ={onChangeHandler}
                    styles={{
                    label:{paddingLeft: '2px'},
                    input:{paddingLeft: '3px'}
                    }}
                />
            </div>
            <FormInput placeholder='quantity' name='qty' onChangeHandler ={onChangeHandler}/>
        </div>
        }
        </div>
</div>


const options = ['$', 'N']