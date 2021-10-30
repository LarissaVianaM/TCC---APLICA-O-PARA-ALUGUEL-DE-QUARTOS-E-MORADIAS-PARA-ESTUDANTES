import React, { useState, useMemo } from 'react';
import Button from '../../components/Button';

import camera from '../../assets/camera.svg';
import { Container, Content, Background, BTN, ContainerHeader, Header } from './styles';
import { Link } from 'react-router-dom';

function NewSpot() {
  const [thumbnail, setThumbnail] = useState(null);
  const [category, setCategory] = useState('');
  const [amenitie, setAmenitie] = useState('');
  const [address,  setAddress] = useState('');
  const [price,    setPrice] = useState('');

  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null;
  }, [thumbnail])
  
  async function handleSubmit(event: { preventDefault: () => void; }) {
    event.preventDefault();
  }

  return (
    <>
    <ContainerHeader>
        <Header>
          <strong>Início</strong>
          <p>Roberto Silva</p> 
        </Header>
      </ContainerHeader>
    <form onSubmit={handleSubmit}>
      <Container>
        <Background>
          <label 
            id="thumbnail" 
            style={{ backgroundImage: `url(${preview})` }}
            className={thumbnail ? 'has-thumbnail' : ''}
          >
            <input type="file" onChange={event => setThumbnail(event.target.files[0])} />
            <img src={camera} alt="Select Img" />
          </label>
        </Background>
        <Content>
          <label htmlFor="category">Categoria</label>
          <input 
            id="category"
            placeholder="Entre com uma Categoria"
            value={category}
            onChange={event => setCategory(event.target.value)}
          />

          <label htmlFor="category">Comodidades</label>
          <input 
            id="amenities"
            placeholder="Entre com as comodidades"
            value={amenitie}
            onChange={event => setAmenitie(event.target.value)}
          />

          <label htmlFor="address">Endereço</label>
          <input 
            id="address"
            placeholder="Logradouro, Cidade, Complemento"
            value={address}
            onChange={event => setAddress(event.target.value)}
          />

          <label htmlFor="address">Valor</label>
          <input 
            id="price"
            placeholder="Informe o valor mensal"
            value={price}
            onChange={event => setPrice(event.target.value)}
          />

        </Content>
        
      </Container>
      <BTN>
      <Link to="/dashboard">
        <Button className="btn" type="submit">
          Cadastrar/Publicar
        </Button>
      </Link>
      </BTN>
    </form>
    
    </>
  )
}

export { NewSpot };