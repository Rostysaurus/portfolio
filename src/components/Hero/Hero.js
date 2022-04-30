import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const learnMoreHandler = () => {
  return window.location = "projects"
}

const Hero = (props) => (
  <Section>
    <LeftSection>
      <SectionTitle>
        Welcome to <br/> My Personal Portfolio
      </SectionTitle>
      <SectionText>
        I am a Junior Web Developer based in Berlin, Germany.
      </SectionText>
      <Button onclick={learnMoreHandler}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;
