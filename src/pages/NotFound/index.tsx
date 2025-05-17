import { useLocation, useNavigate } from "react-router-dom";
import { Container } from "./styles";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import logoHighlight from "../../assets/logo_highlight.png";

export function NotFound() {
  const navigate = useNavigate();
  const location = useLocation();

  function handleRedirect() {
    navigate(location.state?.from || "/", { replace: true });
  }

  return (
    <div className="home-page">
      <Container>
        <h2>#404</h2>
        <h3>Página não encontrada :{"("}</h3>
        <Button onClick={handleRedirect} label="Voltar" />
      </Container>

      <Footer
        logo={logoHighlight}
        brandName="HelpDesk Service"
      ></Footer>
    </div>
  );
}
