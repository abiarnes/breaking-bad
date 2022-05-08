import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Typography,
  Link
} from "@mui/material";
import notFoundChar from "../media/char-not-found.jpg";
import useCharacters from "../hooks/useCharacters";

const Character = ({ item }) => {
  const { img, name, portrayed } = item;
  const { handleCharId } = useCharacters() || {};
  return (
    <Grid item md={5} lg={3}>
      <Card
        className="card"
      >
        <CardActionArea>
          <Link
            href="/details"
            sx={{
              textDecoration: "none",
            }}
            onClick={handleCharId()}
          >
        <CardMedia
          component="img"
          alt={`Imagen de la noticia ${name}`}
          image={img ? img : notFoundChar}
          height={250}
          sx={{
            objectFit: "contain",
            paddingTop: '25px'
          }}
        />
        <CardContent
          sx={{
            textAlign: "center",
          }}
        >
          <Typography variant="h6">{name}</Typography>
          <Typography variant="subtitle1" component="div">
            {portrayed}
          </Typography>
        </CardContent>
          </Link>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default Character;
