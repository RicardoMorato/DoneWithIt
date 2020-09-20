import React from 'react';
import { Image } from 'react-native';
import { Formik } from 'formik';

import { AppButton } from '../../components/AppButton';
import { AppTextInput } from '../../components/AppTextInput';
import { Screen } from '../../components/Screen';
import styles from './styles';

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
      >
        { ({ handleChange, handleSubmit }) => (
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

            <AppTextInput
              autoCapitalize='none'
              autoCorrect={false}
              icon='lock'
              onChangeText={handleChange('password')}
              placeholder='Password'
              secureTextEntry
              textContentType='password'
            />

            <AppButton
              title='Login'
              onPress={handleSubmit()}
            />
          </>
        )}
      </Formik>
    </Screen>
  );
}
