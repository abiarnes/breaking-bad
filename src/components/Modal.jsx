import * as React from 'react';
import {
    Grid,
  Dialog,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Container,
} from '@mui/material';
import useCharacters from '../hooks/useCharacters';
import closeButton from '../media/close-button.png';
const Modal = () => {
  const { modal, handleModalClick, selected } = useCharacters();
  const { name, nickname, portrayed, birthday, img, occupation, appearance, status } = selected;

  let occupationList = occupation && occupation.join(', ');
  let seasonsList = appearance && appearance.join(', ');

  return (
    <div>
    <Grid item md={5} lg={3}>
      <Dialog fullScreen open={modal} onClose={handleModalClick}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleModalClick}
            aria-label="close"
          >
            <img src={closeButton} height={60} />
          </IconButton>
          <Typography
            sx={{ ml: 2, flex: 1 }}
            variant="h3"
            component="div"
            sx={{ color: 'white' }}
          >
            {name} - {portrayed}
          </Typography>
        </Toolbar>
        <Container md={5} lg={3} className="details-wrapper">
          <Container item>
            <img src={img} height={450} />
          </Container>
          <Container item>
            <Typography variant="h4" sx={{ color: 'white' }}>
              Data sheet
            </Typography>
            <Typography variant="h6" sx={{ color: '#c5ac6a' }}>
              Nickname: {nickname}
            </Typography>
            <Typography variant="h6" sx={{ color: '#c5ac6a' }}>
              Occupation: {occupationList}
            </Typography>
            <Typography variant="h6" sx={{ color: '#c5ac6a' }}>
              Birthday: {birthday}
            </Typography>
            <Typography variant="h6" sx={{ color: '#c5ac6a' }}>
              Seasons: {seasonsList}
            </Typography>
            <Typography variant="h6" sx={{ color: '#c5ac6a' }}>
              Status: {status}
              </Typography>
          </Container>
        </Container>
      </Dialog>
      </Grid>
    </div>
  );
};

export default Modal;
