import * as yup from 'yup';
import {
  confirmPasswordValidator,
  dateValidator,
  emailValidator,
  noEmptyString,
  passwordValidator,
} from './validators';

export const regValidator = yup.object().shape({
  firstname: noEmptyString,
  lastname: noEmptyString,
  email: emailValidator,
  password: passwordValidator,
  confirm_password: confirmPasswordValidator,
  birthdate: dateValidator,
})