import {Field, Form, Formik} from 'formik';
import * as yup from 'yup'
import React, {FC} from 'react';
import '../baseStyles.scss'
import './style.scss'
import Button from "../../Buttons/Button";
import {button_display_types, button_types} from "../../Buttons/types";
import useAction from "../../../hooks/useAction";
import MusicLoader from "../../../assets/loader/musicLoader/MusicLoader";

interface ILoginData {
    email: string;
    password: string;
}

interface ILoginProps {
    isFetching: boolean
}

const LoginForm: FC<ILoginProps> = ({isFetching}) => {

    const {login} = useAction()

    const validationScheme = yup.object().shape({
        email: yup.string().email('Это не Email!').required('Email должен быть указан обязательно'),
        password: yup.string().required('Пароль не введен!')
    })

    const initialValues = {
        email: '',
        password: ''
    }

    return (
        <Formik initialValues={initialValues}
                onSubmit={({email, password}: ILoginData) => {
                    login(email, password)
                }}
                validateOnBlur
                validationSchema={validationScheme}
        >
            {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit}) => (
                <Form>
                    <Field id={'email'}
                           name={'email'}
                           type={'email'}
                           placeholder={'Введите ваш email'}
                           onChange={handleChange}
                           onBlur={handleBlur}
                           value={values.email}
                    />
                    {touched.email && errors.email && <p className={'error'}>{errors.email}</p>}
                    <Field id={'password'}
                           name={'password'}
                           type={'password'}
                           placeholder={'Введите ваш пароль'}
                           onChange={handleChange}
                           onBlur={handleBlur}
                           value={values.password}
                    />
                    {touched.password && errors.password && <p className={'error'}>{errors.password}</p>}
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