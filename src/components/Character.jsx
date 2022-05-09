import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import useCharacters from '../hooks/useCharacters';

const Character = ({ item }) => {
  const { char_id, img, name, portrayed } = item;
  const { handleCharId, handleModalClick, handleCharName } = useCharacters() || {};

  return (
    <Grid item md={5} lg={3}>
        <Card
        className="card"
        onClick={() => {
          handleModalClick()
          handleCharId(char_id)
          handleCharName(name)
        }}
      >
          <CardMedia
            component="img"
            alt={`Imagen de la noticia ${name}`}
            image={img}
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
      </Card>    
    </Grid>
  );
};

export default Character;
