import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Box } from '@material-ui/core';

import styles from './styles';

const useStyles = makeStyles(styles);

function HomeScreen() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.mainContainer}>
        <Typography variant="h1" className={classes.title}>
          Feito para quem faz
        </Typography>
        <Typography variant="body1" className={classes.subtitle}>
          Divulgue e visualize os melhores eventos de programação.
        </Typography>
      </div>
      <Box marginTop={5}>
        <Typography variant="h5">Próximos Eventos</Typography>
        <Grid container spacing={5}>
          <Grid item lg={4} sm={6} xs={12}>
            <Box display="flex" flexDirection="column">
              <img
                className={classes.eventImage}
                alt="Evento"
                src="https://static01.nyt.com/images/2016/06/14/business/14applelive2/14applelive2-facebookJumbo.jpg"
              />
              <div className={classes.eventContent}>
                <Box
                  display="flex"
                  flexDirection="column"
                  marginRight={2}
                  alignItems="center"
                >
                  <Typography variant="body1" className={classes.eventMonth}>
                    SET
                  </Typography>
                  <Typography variant="body1" className={classes.eventDay}>
                    17
                  </Typography>
                </Box>
                <div className={classes.eventDescription}>
                  <Typography
                    variant="body1"
                    gutterBottom
                    className={classes.eventTitle}
                  >
                    Título do Evento
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    O Lorem Ipsum é um texto modelo da indústria tipográfica e
                    de impressão. O Lorem Ipsum tem vindo a ser o texto padrão
                    usado por estas indústrias desde o ano de 1500, quando uma
                    misturou os caracteres de um texto para criar um espécime de
                    livro.
                  </Typography>
                </div>
              </div>
            </Box>
          </Grid>
          <Grid item lg={4} sm={6} xs={12}>
            <Box display="flex" flexDirection="column">
              <img
                className={classes.eventImage}
                alt="Evento"
                src="https://static01.nyt.com/images/2016/06/14/business/14applelive2/14applelive2-facebookJumbo.jpg"
              />
              <div className={classes.eventContent}>
                <Box
                  display="flex"
                  flexDirection="column"
                  marginRight={2}
                  alignItems="center"
                >
                  <Typography variant="body1" className={classes.eventMonth}>
                    SET
                  </Typography>
                  <Typography variant="body1" className={classes.eventDay}>
                    17
                  </Typography>
                </Box>
                <div className={classes.eventDescription}>
                  <Typography
                    variant="body1"
                    gutterBottom
                    className={classes.eventTitle}
                  >
                    Título do Evento
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    O Lorem Ipsum é um texto modelo da indústria tipográfica e
                    de impressão. O Lorem Ipsum tem vindo a ser o texto padrão
                    usado por estas indústrias desde o ano de 1500, quando uma
                    misturou os caracteres de um texto para criar um espécime de
                    livro.
                  </Typography>
                </div>
              </div>
            </Box>
          </Grid>
          <Grid item lg={4} sm={6} xs={12}>
            <Box display="flex" flexDirection="column">
              <img
                className={classes.eventImage}
                alt="Evento"
                src="https://static01.nyt.com/images/2016/06/14/business/14applelive2/14applelive2-facebookJumbo.jpg"
              />
              <div className={classes.eventContent}>
                <Box
                  display="flex"
                  flexDirection="column"
                  marginRight={2}
                  alignItems="center"
                >
                  <Typography variant="body1" className={classes.eventMonth}>
                    SET
                  </Typography>
                  <Typography variant="body1" className={classes.eventDay}>
                    17
                  </Typography>
                </Box>
                <div className={classes.eventDescription}>
                  <Typography
                    variant="body1"
                    gutterBottom
                    className={classes.eventTitle}
                  >
                    Título do Evento
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    O Lorem Ipsum é um texto modelo da indústria tipográfica e
                    de impressão. O Lorem Ipsum tem vindo a ser o texto padrão
                    usado por estas indústrias desde o ano de 1500, quando uma
                    misturou os caracteres de um texto para criar um espécime de
                    livro.
                  </Typography>
                </div>
              </div>
            </Box>
          </Grid>
          <Grid item lg={4} sm={6} xs={12}>
            <Box display="flex" flexDirection="column">
              <img
                className={classes.eventImage}
                alt="Evento"
                src="https://static01.nyt.com/images/2016/06/14/business/14applelive2/14applelive2-facebookJumbo.jpg"
              />
              <div className={classes.eventContent}>
                <Box
                  display="flex"
                  flexDirection="column"
                  marginRight={2}
                  alignItems="center"
                >
                  <Typography variant="body1" className={classes.eventMonth}>
                    SET
                  </Typography>
                  <Typography variant="body1" className={classes.eventDay}>
                    17
                  </Typography>
                </Box>
                <div className={classes.eventDescription}>
                  <Typography
                    variant="body1"
                    gutterBottom
                    className={classes.eventTitle}
                  >
                    Título do Evento
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    O Lorem Ipsum é um texto modelo da indústria tipográfica e
                    de impressão. O Lorem Ipsum tem vindo a ser o texto padrão
                    usado por estas indústrias desde o ano de 1500, quando uma
                    misturou os caracteres de um texto para criar um espécime de
                    livro.
                  </Typography>
                </div>
              </div>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default HomeScreen;
