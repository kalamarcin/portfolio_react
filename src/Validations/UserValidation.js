import * as yup from 'yup'

export const userSchema = yup.object().shape({
	name: yup.string().min(4).required().typeError(),

	email: yup.string().email().required(),

	message: yup.string().min(4).required(),
})
