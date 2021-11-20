import {Field, Form, Formik, FormikHelpers} from 'formik';
import React, {FC} from 'react';
import '../baseStyles.scss'
import './style.scss'
import Button from "../../Buttons/Button";
import {button_display_types, button_types} from "../../Buttons/types";
import {SetModalVisible} from "../../Modal/types";

interface ILoginData {
    email: string;
    password: string;
}

interface ILoginProps {
    setVisible: SetModalVisible
}

const LoginForm:FC<ILoginProps> = ({setVisible}) => {
    return (
        <Formik initialValues={{email: '', password: ''}}
                onSubmit={(values: ILoginData, {setSubmitting}: FormikHelpers<ILoginData>) => {
                    setTimeout(() => {
                        console.log(values)
                        setSubmitting(false)
                    }, 500)
                }}>
            <Form>
                <Field id={'email'} name={'email'} type={'email'} placeholder={'Введите ваш email'}/>
                <Field id={'password'} name={'password'} type={'password'} placeholder={'Введите пароль'}/>
                <Button action={() => setVisible(prev => !prev)} type={button_types.submit} display_type={button_display_types.submit}>Войти!</Button>
            </Form>
        </Formik>
    );
};

export default LoginForm;