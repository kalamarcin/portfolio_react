import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import emailjs from '@emailjs/browser'
import './Contact.scss'

const Contact = () => {
	const navigate = useNavigate()
	const form = useRef()
	const goToHome = () => {
		navigate('/')
	}
	const sendEmail = e => {
		e.preventDefault()

		emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY').then(
			result => {
				console.log(result.text)
			},
			error => {
				console.log(error.text)
			}
		)
	}

	return (
		<>
			<div className="body-section">
				<button className="btn-home" onClick={goToHome}>
					<i class="fa-regular fa-circle-xmark fa-2xl"></i>
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
						<form ref={form} onSubmit={sendEmail}>
							<input type="text" name="user_name" placeholder="NAME" />

							<input type="email" name="user_email" placeholder="EMAIL" />

							<textarea name="message" placeholder="MESSAGE" rows={5} />

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
