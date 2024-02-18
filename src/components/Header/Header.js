import Link from "next/link";
import React from "react";
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: "white" }}>
          <DiCssdeck size="3rem" /> <span>PARTH</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/Parth24072001">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/poshiyaparth2407/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://twitter.com/PoshiyaParth24?t=AEF6edz3HPnB0JIBsECksQ&s=09">
        <AiFillTwitterCircle size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
