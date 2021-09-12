import React from 'react';

import { BlogCard, CardInfo, GridContainer, HeaderThree, Hr, TitleContent, Img } from './CompetitionsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { competitions } from '../../constants/constants';

const Competitions = () => (
    <Section nopadding id="competitions">
        <SectionDivider />
        <br />
        <SectionTitle>Конкурсы</SectionTitle>
        <GridContainer>
            {competitions.map(({ id, image, title, description }) => (
                <BlogCard key={id}>
                    <Img src={image} />
                    <TitleContent>
                        <HeaderThree title>{title}</HeaderThree>
                    </TitleContent>
                    <Hr />
                    <CardInfo>{description}</CardInfo>
                    <Hr />
                </BlogCard>
            ))}
        </GridContainer>
    </Section>
);

export default Competitions;