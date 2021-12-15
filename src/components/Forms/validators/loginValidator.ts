import * as yup from 'yup';
import { emailValidator, passwordValidator } from './validators';

export const loginValidator = yup.object().shape({
  email: emailValidator,
  password: passwordValidator
})