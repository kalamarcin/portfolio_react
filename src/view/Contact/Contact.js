import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import emailjs from '@emailjs/browser'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useForm } from 'react-hook-form'
import { userSchema } from '../../Validations/UserValidation'

import { yupResolver } from '@hookform/resolvers/yup'

//style
import './Contact.scss'

const Contact = () => {
  const navigate = useNavigate()
  const form = useRef()
  const goToHome = () => {
    navigate('/')
  }
  const notifySend = () =>
    toast.success('Wysłane!', {
      theme: 'light',
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2000,
      className: 'tost',
      pauseOnFocusLoss: false,
    })

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchema),
  })

  const sendEmail = () => {
    emailjs.sendForm('service_xyxbpt9', 'template_hprltkm', form.current, 'FhcVn6Mg6nE0z72o-').then(
      result => {
        console.log(result.text)
      },
      error => {
        console.log(error.text)
      }
    )

    notifySend()
    reset()
  }

  return (
    <>
      <ToastContainer />
      <div className="body-section">
        <button className="btn-home" onClick={goToHome}>
          <i className="fa-regular fa-circle-xmark fa-2xl"></i>
        </button>

        <section className="form-section-grid">
          <div className="cell-form">
            <div className="text-content">
              <h1>Contact</h1>
              <p>Please fill in the form, and I'll get back to you as soon as possible.</p>
            </div>
          </div>
          <div className="cell-form">
            <form ref={form} onSubmit={handleSubmit(sendEmail)}>
              <input
                className={errors.name ? 'error_input' : 'normal_input'}
                type="text"
                name="name"
                placeholder="NAME"
                {...register('name')}
              />
              {errors.name ? <p className="error_info">{errors.name.message}</p> : ''}

              <input
                className={errors.email ? 'error_input' : 'normal_input'}
                type="email"
                name="email"
                placeholder="EMAIL"
                {...register('email')}
              />
              {errors.email ? <p className="error_info">{errors.email.message}</p> : ''}

              <textarea
                className={errors.message ? 'error_textarea' : 'normal_textarea'}
                name="message"
                placeholder="MESSAGE"
                rows={5}
                {...register('message')}
              />
              {errors.message ? <p className="error_info_text">{errors.message.message}</p> : ''}

              <button className="submit" type="submit" value="Send">
                SEND MESSAGE
              </button>
            </form>
          </div>
        </section>
      </div>
    </>
  )
}

export default Contact
