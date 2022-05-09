import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  // Link,
  Typography,
} from '@mui/material';
import { Link, useHistory } from 'react-router-dom';
import notFoundChar from '../media/char-not-found.jpg';
import useCharacters from '../hooks/useCharacters';

const Character = ({ item }) => {
  const { char_id, img, name, portrayed } = item;
  const { handleCharId } = useCharacters() || {};

  const handleUrl = () => {
    let history = useHistory();
    history.push('/details');
  };

  const handleClick = () => {
    () => handleCharId(char_id);
    console.log(char_id)
    // handleUrl();
  };

  return (
    <Grid item md={5} lg={3}>
      <Card className="card" onClick={() => handleCharId(char_id)}>
        <Link to="/details">
          <CardMedia
            component="img"
            alt={`Imagen de la noticia ${name}`}
            image={img ? img : notFoundChar}
            height={250}
            sx={{
              objectFit: 'contain',
              paddingTop: '25px',
            }}
          />
          <CardContent
            sx={{
              textAlign: 'center',
            }}
          >
            <Typography variant="h6">{name}</Typography>
            <Typography variant="subtitle1" component="div">
              {portrayed}
            </Typography>
          </CardContent>
        </Link>
      </Card>
    </Grid>
  );
};

export default Character;
