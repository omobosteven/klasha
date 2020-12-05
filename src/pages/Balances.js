import React from 'react';
import { Container } from '@material-ui/core';
import { SectionHeader, CurrentBalance, BalanceTable } from '../components';

const Balances = () => {
  return (
    <Container>
      <SectionHeader />
      <CurrentBalance />
      <BalanceTable />
    </Container>
  );
};

export default Balances;
