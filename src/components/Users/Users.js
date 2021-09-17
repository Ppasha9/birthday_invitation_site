import React from 'react';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Table from "../Table/Table";
import { users } from "../../constants/constants";

const Users = () => {
    return (
        <Section id="users">
            <SectionDivider />
            <br />
            <SectionTitle>Участники</SectionTitle>
            <Table
                tableData={users}
                headingColumns={['Имя', 'Общий рейтинг']}
            />
        </Section>
    );
};

export default Users;
