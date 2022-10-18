import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useState, useEffect } from 'react'

const Contact = () => {

  const [hasMounted, setHasMounted ] = useState(false);

  useEffect = (() => {
    setHasMounted(true)
  }, [hasMounted])

  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data);
  const message = watch('message') || "";
  const messageCharsLeft = 1500 - message.length;
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
          </form>
        </div>
      </div>
  )
}

export default Contact
