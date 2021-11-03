import {
  Hero,
  Copy,
  Title,
  List,
  ButtonSection,
  LinkWrap,
  DevDAOIcon
} from "../styles/styles";

import Button from "../styles/UI-Components/Button";
import Image from "next/image";

export default function Landing() {
  return (
    <Hero>
      <DevDAOIcon style={{width: '10rem', height: '10rem'}}>
        <Image width="200" height="200" src="/DevDAO.png" />
      </DevDAOIcon>
      <Copy>
        <Title>Looking for Web3 talent?</Title>
        <LinkWrap href="/developers">
          <Button styling='positive'>Search  Devs</Button>
        </LinkWrap>
        <Title>Looking for Web3 work?</Title>
        <LinkWrap href="/jobs">
          <Button styling='positive'>Search Jobs</Button>
        </LinkWrap>
      </Copy>
    </Hero>
  );
}
