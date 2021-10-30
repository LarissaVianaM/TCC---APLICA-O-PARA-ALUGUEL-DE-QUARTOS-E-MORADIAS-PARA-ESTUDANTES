/* eslint-disable jsx-a11y/img-redundant-alt */
// eslint-disable-next-line jsx-a11y/img-redundant-alt
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import { api } from '../../services/api';

import { ContainerHeader, Header, Ul, Container, Content, Background } from './styles';

function Dashboard() {
  const [spots, setSpots] = useState([]);

  useEffect(() => {
    async function loadSpots(){
      const user_id = localStorage.getItem('user');

      const response = await api.get('/dashboard', {
        headers: { user_id }
      });

      setSpots(response.data);
      console.log(response);
    }

    loadSpots();
  }, []);

  return (
    <> 
      <ContainerHeader>
        <Header> 
          <strong>Início</strong>
          <p>Larrisa Viana</p> 
        </Header>
      </ContainerHeader>
      <hr />
      <Container>
        <Content>
          <h2> Imoveis disponíveis 
            <Link to="/dashboard">
              <Button className="btn">
                Filtro
              </Button>
            </Link> 
          </h2>

          

          <Ul className="spot-list">
            {spots.map(spot => (
              <li key={spot._id}>
                <header style={{ backgroundImage: `url(${spot.thumbnail_url})` }} />
                <hr />
                <strong>{spot.category}</strong>
                <br />
                <p>{spot.amenities}</p>
                <span>{spot.price ? `R$${spot.price}/mês` : 'Gratuito'}</span>
              </li>
            ))}
          </Ul>
        </Content>

        <Background />
      </Container>
    </>
  )
}

export { Dashboard };