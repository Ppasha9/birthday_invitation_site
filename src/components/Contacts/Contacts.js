import React from 'react';
import { BiTime } from 'react-icons/bi';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './ContactsStyles';

const Contacts = () => (
    <Section id="contacts">
        <SectionDivider />
        <br />
        <SectionTitle>Контакты</SectionTitle>
        <List>
            <ListItem>
                <BiTime size="3rem" />
                <ListContainer style={{ marginTop: '5px' }}>
                    <ListTitle>Место встречи</ListTitle>
                    <ListParagraph>
                        Очень красивое, душевное и знаменитое место - <b><i>Автово</i></b>.
                    </ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <BiTime size="3rem" />
                <ListContainer style={{ marginTop: '5px' }}>
                    <ListTitle>Дата и время встречи</ListTitle>
                    <ListParagraph>
                        18 сентября 2021 года <br />
                        Примерно 17:00-18:00 по МСК.
                    </ListParagraph>
                </ListContainer>
            </ListItem>
        </List>
    </Section>
);

export default Contacts;
