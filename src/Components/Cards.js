import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import axios from "axios";
import React, {useEffect,useState}from "react";
import "./Box.css";


const  CardIxaya= () => {
  const baseURL = "https://sandbox.ixaya.net/api/products?X-API-KEY=kkkcc4o4gsko8w0wg084k4o8s4wggwcosk8okgw4";
  const [post, setPost] = useState();
  
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost (response.data.response);
    });
  }, []);

      const renderCard = (card, index) => {
        return (
          <Card style={{ width: "18rem" }} key={index} className="box">
           <Card.Title>{card.title}</Card.Title>
            <Card.Img variant="top" src={card.image_url} />
            <Card.Body>
              <Card.Title>Desde: ${card.price}</Card.Title> 
              <Button variant="primary">Agregar</Button>

            </Card.Body>
          </Card>
        );
      };
    
      return <div className="grid">{post && post.map(renderCard)}</div>;
    };


export default CardIxaya;