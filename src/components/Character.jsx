import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import notFoundChar from "../media/char-not-found.jpg";

const Character = ({ item }) => {
  const { img, name, portrayed } = item;
  return (
    <Grid item md={5} lg={3}>
      <Card
        className="card"
      >
        {}
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
        {/* <CardActions>
          <Link
            href={url}
            target="_blank"
            variant="button"
            width={"100%"}
            textAlign={"center"}
            sx={{
              textDecoration: "none",
            }}
          >
            Leer Noticia
          </Link>
        </CardActions> */}
      </Card>
    </Grid>
  );
};

export default Character;
