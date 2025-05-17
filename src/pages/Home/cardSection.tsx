import React from "react";
import { Card } from "../../components/Card";
import { FaWrench, FaGear, FaCircleInfo } from "react-icons/fa6";
import { CardSectionContainer } from "./styles";

const CardSection: React.FC = () => {
  return (
    <CardSectionContainer>
      <h2 className="section-title">
        Tópicos populares
      </h2>
      <div className="card-container">
        <Card
        className="card"
          icon={<FaCircleInfo />}
          title="Primeiros passos"
          content="Novo na nossa plataforma? Aprenda o básico e fique por dentro rapidamente."
        />
        <Card
        className="card"
          icon={<FaWrench />}
          title="Solução de Problemas"
          content="Encontre soluções para problemas comuns e questões técnicas."
        />
        <Card
        className="card"
          icon={<FaGear />}
          title="Configurações da Conta"
          content="Gerencie sua conta, perfil e preferências de notificação."
        />
      </div>
    </CardSectionContainer>
  );
};

export default CardSection;
