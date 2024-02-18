import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          PARTH POSHIYA <br />
          Full Stack Developer
        </SectionTitle>
        <SectionText>
          Hello World! , I am PARTH a First Year Postgraduate at IGNOU from
          India , I love creating stuff for web.
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
