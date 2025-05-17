import { Input, Button } from "../../components";
import { SectionContainer, InputContainer, ButtonGroup } from "./styles";
import { FaSistrix } from "react-icons/fa6";

export const Section = () => {
  return (
    <SectionContainer>
      <h1>Como podemos te ajudar hoje?</h1>
      <p>
        Pesquise na nossa base de conhecimento ou envie um chamado para obter
        ajuda.
      </p>
      <InputContainer>
        <Input
          id="search"
          label=""         
          placeholder="Digite sua pesquisa"
          type="text"
          style={{ width: "500px" }}
        />
        <Button
          variant="primary"
          label="Pesquisar"
          icon={<FaSistrix />}
        ></Button>
      </InputContainer>
      <ButtonGroup>
        <Button variant="primary" label="Criar ticket"></Button>
      </ButtonGroup>
    </SectionContainer>
  );
};

export default Section;
