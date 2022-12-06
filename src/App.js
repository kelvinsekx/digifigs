import React from 'react'
import { init } from './stateMgt'

import {Tumblr} from './components/Tumblr/index'
import {Thumbnails} from './components/Thumbnails'
import {TumblrHeader} from './components/TumblrHeader'

import {FormField} from './components/FormField'
import {FormInput} from './components/FormInput'
import {AddAnotherWiget} from './components/AddAnotherWidget'
import { Wyswyg } from './components/Wyswyg'

import {DeleteButton, ShareButton} from './components/Buttons'
import RedirectToSignUp from './components/redirectToSignup'
import Signup from "./pages/signup.page";

function App() {
  const [state, setState] = React.useState({
    navigation: 'home'
  })

  const navigate = {
    to: (to)=>setState({...state, navigation: to})
  }

  if(state.navigation === 'redirectToSignup'){
    return <RedirectToSignUp navigate={navigate} />
  }

  if(state.navigation === 'signup'){
    return <Signup />
  }

  return (
    <Thumbnails>
     <Tumblr 
      header={<Header />}
      body={<TumblrBody navigate={navigate}/>} 
     />
    </Thumbnails>
  );
}

const TumblrBody = ({navigate})=>{
  const [state, setState] = React.useState(init)

  const onChangeHandler = function (e){
    const newState = {...state}
    newState[e.target.name] = e.target.value;
    setState(newState)
  }

  const handleSubmit = function(e){
    e.preventDefault()
    console.log(state)
    setTimeout(()=>navigate.to('redirectToSignup'), 1000)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div style={{height:'350px', overflowY: "scroll"}}>
      <FormField title='List details' details='Add wish list name and description.'>
        <FormInput 
          placeholder='Wish list name' 
          onChangeHandler={onChangeHandler}
          name="listName"
        />
        <FormInput 
          placeholder='Description (optional)'
          onChangeHandler={onChangeHandler}
          name="description"
        />
      </FormField>
      
      <FormField title='Add wishes' details='Add wishes and other details.'>
        <Wyswyg 
          wishName={state.wishName} 
          onChangeHandler={onChangeHandler}
        />
      </FormField>
      <AddAnotherWiget/>
      </div>
  
      <div style={{display:'flex', justifyContent: 'space-between', padding: '1rem 0'}}>
        <DeleteButton disabled={!!!state.listName}/>
        <ShareButton disabled={!!!state.listName}/>
      </div>
    </form>
  )
}

const Header = ()=><TumblrHeader aside='New wish list' title='Create a wish list'/>

export default App;
