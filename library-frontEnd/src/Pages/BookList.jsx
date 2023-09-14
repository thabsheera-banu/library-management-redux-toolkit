import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button'; 
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/books/')
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleViewDetails = (book) => {
    if (user) {
      setSelectedBook(book);
      setIsModalOpen(true); 
    } else {
      navigate('/signin');
    }
  };

  const handleCloseDetails = () => {
    setSelectedBook(null);
    setIsModalOpen(false); 
  };

  return (
    <Grid container spacing={2}>
      {books.map((book) => (
        <Grid item xs={12} sm={4} md={3} lg={3} key={book.id}>
          <Card style={{ backgroundColor: '#eee' }}>
            <CardHeader title={book.title} />
            <CardContent>
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleViewDetails(book)}
              >
                View Details
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
      {selectedBook && (
        <Dialog onClose={handleCloseDetails} open={isModalOpen}>
          <DialogTitle>{`Details for ${selectedBook.title}`}</DialogTitle>
          <DialogContent>
            <Typography variant="body2" >
              Category: {selectedBook.category.title}
            </Typography>
            <Button
                variant="contained"
                color="primary"
              >
                place order
              </Button>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDetails} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </Grid>
  );
};

export default BookList;
