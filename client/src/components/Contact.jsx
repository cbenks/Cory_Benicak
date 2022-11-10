import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useState } from 'react'

const Contact = () => {

  const [emailSent, setEmailSent] = useState(false);
  const { register, handleSubmit, watch } = useForm();
  const onSubmit = data => console.log(data);
  const message = watch('message') || "";
  const messageCharsLeft = 1500 - message.length;

  const submit = () => {
    if(name && email && message) {
      setName('');
      setEmail('');
      setEmailSent(true);
    } else {
      alert('Please fill in all fields.')
    }
  }

  const isValidEmail = email => {
    const regrex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return regrex.test(String(email).toLowerCase())
  }


  return(
      <div className='contact'>
        <button className='back'><Link to="/">back</Link></button>
        <h1 className='contactme' >Contact</h1>
        <div className='form'>
          <form onSubmit={handleSubmit(onSubmit)} >
            <input type='text' name='user_name' placeholder='Name' maxLength='30' {...register('user_name')} />
            <br/>
            <input type='email'  name='email' placeholder='Email' maxLength='30' {...register('email')}/>
            <br/>
            <textarea name='message' placeholder='Message' maxLength='1500' {...register('message')}/>
            <p className='message-chars-left'>{messageCharsLeft}</p>
            <br/>
            <input type='submit' value='Send' />
            <span className={emailSent ? 'visible' : null}>Thank you for your message, I will be in contact shortly!</span>
          </form>
        </div>
      </div>
  )
}

export default Contact
