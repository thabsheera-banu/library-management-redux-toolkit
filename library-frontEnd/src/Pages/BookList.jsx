import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button'; 
import axios from 'axios';

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/books/')
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <Grid container spacing={2}>
      {books.map((book) => (
        <Grid item xs={12} sm={4} md={3} lg={3} key={book.id}>
          <Card style={{ backgroundColor: '#eee' }}>
            <CardHeader title={book.title} />
            <CardContent>
              <Typography variant="body2" color="textSecondary">
                Category: {book.category.title}
              </Typography>
              <Button className='' variant="contained" color="primary">
                Place Order
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default BookList;
