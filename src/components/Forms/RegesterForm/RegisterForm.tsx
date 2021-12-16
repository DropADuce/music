import React from 'react';
import { Field, Form, Formik } from 'formik';
import DatePickerField from '../DatePicker/DatePickerField';
import { button_display_types, button_types } from '../../Buttons/types';
import Button from '../../Buttons/Button';
import { regValidator } from '../validators/regValidator';
import GroupedFields from '../GropedFields/GroupedFields';

interface IValues {
  firstname: string;
  lastname: string;
  password: string;
  confirm_password: string;
  email: string;
  birthdate: Date;
}

const RegisterForm = () => {

  const initialValues = {
    firstname: '',
    lastname: '',
    password: '',
    confirm_password: '',
    email: '',
    birthdate: new Date(),
  };

  return (
    <Formik initialValues={initialValues}
            onSubmit={({ birthdate }: IValues) => {
            }}
            validateOnBlur
            validationSchema={regValidator}
    >
      {({
          values, setFieldValue, handleChange
          , handleSubmit, errors, touched
          , handleBlur, isValid
          , setFieldTouched,
        }) => (
        <Form>
          <GroupedFields groupName={'Фамилия и имя'}>
            <>
              <Field
                id={'firstname'} name={'firstname'} value={values.firstname}
                type={'text'} placeholder={'Введите ваше имя'} onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.firstname && errors.firstname && <p className={'error'}>{errors.firstname}</p>}
            </>
            <>
              <Field
                id={'lastname'} name={'lastname'} value={values.lastname}
                type={'text'} placeholder={'Введите вашу фамилию'} onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.lastname && errors.lastname && <p className={'error'}>{errors.lastname}</p>}
            </>
          </GroupedFields>
          <GroupedFields groupName={'Email и пароль'}>
            <>
              <Field
                id={'email'} name={'email'} value={values.email}
                type={'email'} placeholder={'Введите ваш email'} onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.email && errors.email && <p className={'error'}>{errors.email}</p>}
            </>
            <>
              <Field
                id={'password'} name={'password'} value={values.password}
                type={'password'} placeholder={'Введите ваш пароль'} onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.password && errors.password && <p className={'error'}>{errors.password}</p>}
            </>
            <>
              <Field
                id={'confirm_password'} name={'confirm_password'} value={values.confirm_password}
                type={'password'} placeholder={'Подтвердите пароль'} onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.confirm_password && errors.confirm_password &&
              <p className={'error'}>{errors.confirm_password}</p>}
            </>
          </GroupedFields>
          <GroupedFields groupName={'Дата рождения'}>
            <>
              <DatePickerField name={'birthdate'} value={values.birthdate}
                               onChange={setFieldValue} onTouched={setFieldTouched} />
              {touched.birthdate && errors.birthdate && <p className={'error'}>{errors.birthdate}</p>}
            </>
          </GroupedFields>
          <Button
            type={button_types.submit}
            display_type={button_display_types.submit}
            action={handleSubmit}>
            Зарегистрировать!
          </Button>
        </Form>
        )}
        </Formik>
        );
      };

      export default RegisterForm;