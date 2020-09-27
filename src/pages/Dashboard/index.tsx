import React from 'react';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
	return (
    <>
      <img src={logoImg} alt='Github Exporer' />
      <Title> Explorer repositórios no Github </Title>

      <Form>
        <input placeholder='Digite o nome do repoositório' />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="#">

        </a>
      </Repositories>
    </>
  )
};

export default Dashboard;
