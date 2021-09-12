import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Добро пожаловать <br />
        на мой День Рождения
      </SectionTitle>
      <SectionText>
        Прошу, придумайте себе интересный "никнейм" и зарегистрируйтесь по кнопке ниже.
      </SectionText>
      <Button onClick={() => { }}>
        Регайся
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;