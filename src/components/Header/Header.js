import Link from 'next/link';
import React from 'react';
import { AiFillSmile, AiFillInstagram } from 'react-icons/ai';
import { FaBirthdayCake } from 'react-icons/fa';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20px' }}>
          <FaBirthdayCake size="3rem" />
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#competitions">
          <NavLink>Конкурсы</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#users">
          <NavLink>Участники</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#contacts">
          <NavLink>Контакты</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#results">
          <NavLink>Результаты</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://vk.com/ppasha9">
        <AiFillSmile size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://instagram.com/pavelden">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
