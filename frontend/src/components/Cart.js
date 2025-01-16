import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, TableBody, TableCell, TableHead, TableRow, Button, IconButton, TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const Cart = () => {
  const [cart, setCart] = useState([]);

  const fetchCart = () => {
    axios.get(`${process.env.REACT_APP_API_BASE_URL}/cart/user123`)
      .then(response => setCart(response.data))
      .catch(console.error);
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const updateQuantity = (productId, quantity) => {
    axios.post(`${process.env.REACT_APP_API_BASE_URL}/cart/user123/add`, {
      productId,
      quantity,
    }).then(fetchCart)
      .catch(console.error);
  };

  const removeItem = (item) => {
    axios.delete(`${process.env.REACT_APP_API_BASE_URL}/cart/user123/remove`, { data: item })
      .then(fetchCart)
      .catch(console.error);
  };

  const placeOrder = () => {
    cart.forEach(item => {
      axios.post(`${process.env.REACT_APP_API_BASE_URL}/orders`, {
        userId: "user123",
        productId: item.productId,
        quantity: item.quantity,
        price: item.price
      });
    });
    alert("Order placed!");
  };

  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Product</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart.map(item => (
            <TableRow key={item.productId}>
              <TableCell>{item.productName}</TableCell>
              <TableCell>
                <TextField
                  type="number"
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.productId, e.target.value)}
                  inputProps={{ min: 1 }}
                />
              </TableCell>
              <TableCell>${item.price}</TableCell>
              <TableCell>
                <IconButton onClick={() => removeItem(item)}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button variant="contained" onClick={placeOrder}>
        Place Order
      </Button>
    </div>
  );
};

export default Cart;
