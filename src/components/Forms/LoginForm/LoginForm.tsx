import { Field, Form, Formik } from 'formik';
import React, { FC } from 'react';
import '../baseStyles.scss';
import './style.scss';
import Button from '../../Buttons/Button';
import { button_display_types, button_types } from '../../Buttons/types';
import useAction from '../../../hooks/useAction';
import MusicLoader from '../../../assets/loader/musicLoader/MusicLoader';
import { isValidField } from '../validators/validators';
import { loginValidator } from '../validators/loginValidator';
import GroupedFields from '../GropedFields/GroupedFields';

interface ILoginData {
  email: string;
  password: string;
}

interface ILoginProps {
  isFetching: boolean;
}

const LoginForm: FC<ILoginProps> = ({ isFetching }) => {

  const { login } = useAction();

  const initialValues = {
    email: '',
    password: '',
  };

  return (
    <Formik initialValues={initialValues}
            onSubmit={({ email, password }: ILoginData) => {
              login(email, password);
            }}
            validateOnBlur
            validationSchema={loginValidator}
    >
      {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit }) => (
        <Form>
          <GroupedFields groupName={'Email'}>
            <>
              <Field id={'email'}
                     name={'email'}
                     type={'email'}
                     placeholder={'Введите ваш email'}
                     onChange={handleChange}
                     onBlur={handleBlur}
                     value={values.email}
              />
              {!isValidField(touched.email, errors.email)
              && <p className={'error'}>{errors.email}</p>}
            </>
          </GroupedFields>
          <GroupedFields groupName={'Пароль'}>
            <>
              <Field id={'password'}
                     name={'password'}
                     type={'password'}
                     placeholder={'Введите ваш пароль'}
                     onChange={handleChange}
                     onBlur={handleBlur}
                     value={values.password}
              />
              {!isValidField(touched.password, errors.password)
              && <p className={'error error_newLine'}>{errors.password}</p>}
            </>
          </GroupedFields>
          <Button
            disabled={!isValid}
            type={button_types.submit}
            display_type={button_display_types.submit}
            action={handleSubmit}>
            {isFetching ? <MusicLoader /> : 'Войти!'}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;