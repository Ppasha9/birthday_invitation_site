import React from 'react';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Table from "../Table/Table";
import { users } from "../../constants/constants";

const Users = () => {
    const sortedUsers = [].concat(users).sort((a, b) => a.rating < b.rating ? 1 : -1);

    return (
        <Section id="users">
            <SectionDivider />
            <br />
            <SectionTitle>Участники</SectionTitle>
            <Table
                tableData={sortedUsers}
                headingColumns={['Имя', 'Общий рейтинг']}
            />
        </Section>
    );
};

export default Users;
