import * as yup from 'yup';

export const emailValidator = yup.string().email('Это не Email').required('Укажите Email')
export const noEmptyString = yup.string().required('Эта строка не может быть пустой!').nullable()
export const confirmPasswordValidator = yup.string().oneOf([yup.ref('password'), null], 'Пароли должны совпадать!')
  .required('Подтвердите пароль')
export const passwordValidator = yup.string().required('Пароль не введен!')
export const dateValidator = yup.date().required('Дата не установлена!').nullable().max(new Date()
  , 'Это слишком поздняя дата!')

export const isValidField = (touchedField: boolean | undefined, errorField: string | undefined): boolean => {
  return !(touchedField && errorField)
}