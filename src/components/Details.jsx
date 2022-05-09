import Spinner from './Spinner';
import { Container, Grid, Box, Card, CardMedia, CardContent, Typography } from '@mui/material';
import useCharacters from '../hooks/useCharacters';

const Details = () => {
  const { selected } = useCharacters() || {};
  console.log('selected', selected && selected);

  return (
    <Container md={5} lg={3} className="details-container">
      <Grid item className="details-wrapper">
        <Card sx={{ display: 'flex' }}>
          {/* <CardMedia
            component="img"
            sx={{ width: 151 }}
            image={}
            alt={}
          /> */}
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography component="div" variant="h5">
                Live From Space
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                Mac Miller
              </Typography>
            </CardContent>
          </Box>
        </Card>
      </Grid>
    </Container>
  );
};

export default Details;
