import React from "react";
import { Navbar, Footer } from "../../components";
import logo from "../../assets/logo.png";
import { Section } from "./section";
import CardSection from "./cardSection";
import logoHighlight from "../../assets/logo_highlight.png";
import { FaUser } from "react-icons/fa6";

export const Home: React.FC = () => {
  return (
    <div className="home-page">
      <Navbar
        links={[
          { label: "Home", href: "/" },
          { label: "Novo Ticket", href: "/ticket" },
          { label: "FAQ", href: "/faq" },
        ]}
        logo={logo}
        icon={<FaUser />}
      />

      <Section />
      <CardSection />

      <Footer
        logo={logoHighlight}
        brandName="HelpDesk Service"
      ></Footer>
    </div>
  );
};

export default Home;
