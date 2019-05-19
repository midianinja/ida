import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
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
    margin: theme.spacing.unit*0.6,
  }, 
  bigAvatar: {
    marginBottom: 40,
    width: 150,
    height: 150,
  },
})

const PublicCard = ({users}) => {
    return (
        <div>
            {users.map((user, key) => (
              <Card key={key}>      
                <CardContent>
                  <Grid container justify="center">
                    <Avatar src={ user.picture.medium }  />
                  </Grid>
      
                  <Typography color="textSecondary" gutterBottom>
                    {`@`}{ user.login.username }
                  </Typography>

                  <Typography variant="h5" component="h5">
                    { user.name.first }
                  </Typography>
      
                  <Typography color="textSecondary">
                    { user.location.city }
                  </Typography>
      
                  <Typography color="textSecondary">
                    CEO, Ninja Hackerspace
                  </Typography>
      
                  <Typography color="textSecondary">
                    { user.email }
                  </Typography>
      
                  <Typography color="textSecondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lobortis ipsum aliquam euismod ornare. Nunc vulputate auctor quam, a pharetra metus placerat id.
                  </Typography>
      
                  <Chip label="MIDIA NINJA" />
                  <Chip label="NINJA HACKERSPACE" />
                  <Chip label="XEPA" />
                  <Chip label="EMERGÊNCIAS" />
      
                </CardContent>
              </Card>
            ))}
        </div>
    )
};

export default withStyles(styles)(PublicCard);
