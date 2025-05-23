import Link from "next/link";
import React from "react";
import { IoIosContact } from "react-icons/io";
import { HiOutlineCode } from "react-icons/hi";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link
        href="/"
        style={{
          display: "flex",
          alignItems: "center",
          color: "white",
          marginBottom: "20px",
        }}
      >
        <HiOutlineCode size="3rem" /> <Span>Zach Matthews</Span>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects" passHref>
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech" passHref>
          <NavLink>Technology</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about" passHref>
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="mailto:zachmatthews010@gmail.com?subject=We%20Would%20Love%20To%20Hire%20You!">
        <IoIosContact size="3.5rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
