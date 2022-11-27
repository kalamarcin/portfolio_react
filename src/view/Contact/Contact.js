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
	const notify = () =>
		toast.success('Wysłane!', {
			theme: 'light',
			position: toast.POSITION.TOP_CENTER,
			autoClose: 2000,
			className: 'tost',
			pauseOnFocusLoss: false,
		})

const {register, handleSubmit, formState: {errors}} = useForm({
	resolver: yupResolver(userSchema),
})

	const sendEmail = () => {
		
		// emailjs.sendForm('service_xyxbpt9', 'template_hprltkm', form.current, 'FhcVn6Mg6nE0z72o-').then(
		// 	result => {
		// 		console.log(result.text)
		// 	},
		// 	error => {
		// 		console.log(error.text)
		// 	}
		// )
		
		notify()
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
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi odio consectetur reprehenderit
								blanditiis consequatur ut doloribus sequi voluptatibus, voluptatum quod.
							</p>
						</div>
					</div>
					<div className="cell-form">
						<form ref={form} onSubmit={handleSubmit(sendEmail)}>
							
							<input className={errors.name ? 'error_input' : 'normal_input'} type="text" name="user_name" placeholder="NAME" {...register('name')}  />
							<p className='error_info'>{errors.name?.message}</p>
							<input className={errors.email ? 'error_input' : 'normal_input'} type="email" name="user_email" placeholder="EMAIL" {...register('email')}/>
							<textarea className={errors.message ? 'error_textarea' : 'normal_textarea'} name="message" placeholder="MESSAGE" rows={5} {...register('message')}/>
							
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
