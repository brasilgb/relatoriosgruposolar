import React, { useState, useContext } from 'react';
import { Platform, ActivityIndicator, StatusBar } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../../contexts/auth';
import { Background, Container, Logo, AreaInput, Input, SubmitButton, SubmitText } from './styles';

export default function SignIn() {


  const [code, setCode] = useState('');
  const [password, setPassword] = useState('');
  const { signIn, loadingAuth } = useContext(AuthContext);

  function handleLogin() {
    signIn(code, password);
  }

  return (
    <Background>
      <StatusBar barStyle="light-content" backgroundColor="#009DE0" />
      <Container
        behavior={Platform.OS === 'ios' ? 'padding' : ''}
        enabled
      >
        <Logo source={require('../../assets/logo-grupo.png')} />

        <AreaInput>
          <Icon name="ios-keypad-sharp" size={20} color="#666" />
          <Input
            placeholder="Código"
            autoCorrect={false}
            autoCapitalize="none"
            value={code}
            onChangeText={(text) => setCode(text)}
            secureTextEntry={true}
            keyboardType="numeric"
          />
        </AreaInput>

        <AreaInput>
          <Icon name="ios-key-sharp" size={18} color="#666" />
          <Input
            placeholder="Senha"
            autoCorrect={false}
            autoCapitalize="none"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
            keyboardType="numeric"
          />
        </AreaInput>

        <SubmitButton onPress={handleLogin}>
          {
            loadingAuth ? (
              <ActivityIndicator size={20} color="#FFF" />
            ) : (
              <SubmitText>Acessar</SubmitText>
            )
          }
        </SubmitButton>
 
      </Container>
    </Background>
  );
}