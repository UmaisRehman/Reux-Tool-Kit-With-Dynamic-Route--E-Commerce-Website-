import React from 'react';
import { Button, Box } from '@mui/material';
import './Card.css';

const Card = ({ title, description, price, src, onClick, addCart }) => {
  return (
    <div className="card">
      <img src={src} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
          <h5>
            Price: {price}
          </h5>
        <Box display="flex" gap={1}>
          <Button variant="contained" sx={{ fontSize: '12px' }} color="primary" onClick={onClick}>
            Buy Now
          </Button>
          <Button variant="contained" sx={{ fontSize: '12px' }} color="primary" onClick={addCart}>
            Add to Cart
          </Button>
        </Box>
      </div>
    </div>
  );
};

export default Card;
