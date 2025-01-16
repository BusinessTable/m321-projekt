import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid, Card, CardContent, Typography, Button, CircularProgress } from "@mui/material";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_BASE_URL}/products`)
      .then(response => setProducts(response.data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const addToCart = (product) => {
    axios.post(`${process.env.REACT_APP_API_BASE_URL}/cart/user123/add`, {
      productId: product.id,
      productName: product.name,
      quantity: 1,
      price: product.price
    }).then(() => alert("Added to cart!"))
      .catch(console.error);
  };

  if (loading) return <CircularProgress />;

  return (
    <Grid container spacing={3} sx={{ padding: 3 }}>
      {products.map(product => (
        <Grid item xs={12} sm={6} md={4} key={product.id}>
          <Card>
            <CardContent>
              <Typography variant="h6">{product.name}</Typography>
              <Typography>${product.price}</Typography>
              <Button variant="contained" onClick={() => addToCart(product)}>
                Add to Cart
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;
