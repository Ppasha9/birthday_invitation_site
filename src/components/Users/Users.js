import React from 'react';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';

const Users = () => {
    return (
        <Section id="users">
            <SectionDivider />
            <br />
            <SectionTitle>Участники</SectionTitle>
            <SectionText>Список участников можно запросить у <a href="https://vk.com/ppasha9"><b>@Ppasha10</b></a>, нормальное отображение было лень делать, извиняйте.</SectionText>
        </Section>
    );
};

export default Users;
