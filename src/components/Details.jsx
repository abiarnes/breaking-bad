// import useCharacters from '../hooks/useCharacters'
import Spinner from './Spinner';
import backButton from '../media/backbtn.svg';
import { Container, Grid, Paper, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import useCharacters from '../hooks/useCharacters';

const Details = () => {  
  return (
    <Container maxWidth="sm">
      <Grid item className="details-wrapper">
        <Paper component="div">
          <Typography variant="h2"></Typography>
        </Paper>
      </Grid>
    </Container>
  );
};

export default Details;
