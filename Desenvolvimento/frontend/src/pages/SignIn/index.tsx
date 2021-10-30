import React, { useState } from 'react';
import { FiMail, FiLock } from 'react-icons/fi'

import { api } from '../../services/api';
import { Container, Content, Background } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

function SignIn({ history }: any) {
  const [email, setEmail] = useState('');

  async function handleSubmit(event: { preventDefault: () => void; }){
    event.preventDefault();
    
    const response = await api.post('/sessions', { email });
    const { _id } = response.data;

    console.log(response.data);

    localStorage.setItem('user', _id);

    history.push('/dashboard')
  }

  return (
    <Container>
      <Background />

      <Content>
        <form onSubmit={handleSubmit}>
          <h1>Estamos quase lá</h1>
          <p>Faça seu login para começar uma experiencia incrivel</p>
          <Input name="email" icon={FiMail} type="text" placeholder="Email" value={email} onChange={event => setEmail(event.target.value)} />
          <Input name="password" icon={FiLock} type="password" placeholder="Senha" />

          <a href="forgot">Esqueci minha senha</a>

          <Button type="submit">Login</Button>
        </form>

        <Button type="submit">
          Criar conta gratuita
        </Button>
      </Content>
    </Container>
  )
}

export { SignIn };