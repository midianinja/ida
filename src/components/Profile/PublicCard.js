import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';

const styles = theme => ({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  chip: {
    margin: theme.spacing.unit*0.7,
  }, 
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
});

const PublicCard = (props) => {
  const { classes } = props;

  return (
    <Card className={classes.card}>
      <CardActions>
        <Grid container justify="flex-end">
          <Grid item>
            <Button size="small">Editar</Button>
          </Grid>
        </Grid>
      </CardActions>
      
      <CardContent>
        <Avatar src="http://lorempixel.com/500/500/people/" className={classes.bigAvatar} justify="center" />

        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Ninja Hackerspace
        </Typography>
        <Typography variant="h5" component="h5">
          @Ninja Hackerspace
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography component="p">
          well meaning and kindly.
        </Typography>

        <Chip label="MIDIA NINJA" className={classes.chip} />
        <Chip label="NINJA HACKERSPACE" className={classes.chip} />
        <Chip label="XEPA" className={classes.chip} />
        <Chip label="EMERGÊNCIAS" className={classes.chip} />

      </CardContent>
      
    </Card>
  );
}

PublicCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PublicCard);