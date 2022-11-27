import * as yup from 'yup'

export const userSchema = yup.object().shape({
	name: yup.string().required().min(2),

	email: yup.string().email().required(),

	message: yup.string().required().min(4),
})
