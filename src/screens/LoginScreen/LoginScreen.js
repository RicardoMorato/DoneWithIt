import React from 'react';
import { Image } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { AppButton } from '../../components/AppButton';
import { AppTextInput } from '../../components/AppTextInput';
import { Screen } from '../../components/Screen';
import styles from './styles';
import { ErrorMessage } from '../../components/ErrorMessage';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

export default function LoginScreen() {
  return (
    <Screen style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../assets/logo-red.png')}
      />

      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}
      >
        { ({ handleChange, handleSubmit, errors }) => (
          <>
            <AppTextInput
              autoCapitalize='none'
              autoCorrect={false}
              icon='email'
              keyboardType='email-address'
              onChangeText={handleChange('email')}
              placeholder='Email'
              textContentType='emailAddress'
            />

            <ErrorMessage err={errors.email} />

            <AppTextInput
              autoCapitalize='none'
              autoCorrect={false}
              icon='lock'
              onChangeText={handleChange('password')}
              placeholder='Password'
              secureTextEntry
              textContentType='password'
            />

            <ErrorMessage err={errors.password} />


            <AppButton
              title='Login'
              onPress={handleSubmit}
            />
          </>
        )}
      </Formik>
    </Screen>
  );
}
