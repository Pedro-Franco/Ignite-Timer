import { HeaderContainer } from "./styles";
import { Timer, Scroll } from "phosphor-react";

import logoIgnite from '../../assets/logo-ignite.svg';
import { NavLink } from "react-router-dom";

export function Header() {
  return(
    <HeaderContainer>
      <img src={logoIgnite} alt="Dois triângulos verdes apontando para o canto superior direito" />
      <nav>
        <NavLink to="/home" title="Timer">
          <Timer size={24}/>
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24}/>
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}