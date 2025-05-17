import React, { useState } from 'react';
import { Input, Button } from '../../components';
import { Container, SignInArea } from './styles';
import { FaArrowRightToBracket, FaUserLarge , FaEnvelope, FaLock   } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export const LoginForm: React.FC = () => {
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!email || !password) {
      setError('Preencha todos os campos');
      return;
    }
    navigate("/", { replace: true });
  };

  const handleSSO = () => {
    console.log('Single Sign-On (SSO) clicked');
  };

  return (
    <Container>
      <h1>HelpDesk Service</h1>
      <SignInArea>
        <h2>Faça login para continuar</h2>
      <Input 
        id="email"
        label="E-mail"
        placeholder="Digite seu e-mail"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        icon={<FaEnvelope />}
        errorMessage={!email && error ? error : undefined}
      />
      <Input 
        id="password"
        label="Senha"
        placeholder="Digite sua senha"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        icon={<FaLock  />}
        errorMessage={!password && error ? error : undefined}
      />
      
      <Button 
        variant="primary"
        label="Entrar"
        icon={<FaArrowRightToBracket  />}
        onClick={handleLogin}
      />
      <Button 
        variant="outlined"
        label="Single Sign-On (SSO)"
        icon={<FaUserLarge />}
        onClick={handleSSO}
      />
     </SignInArea>
    </Container>
  );
};