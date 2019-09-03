import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link'

// const useStyles = makeStyles({
//   card: {
//     maxWidth: 345,
//   },
// });

// const classes = useStyles();

const ImgCard = (props) => (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="post"
          height="140"
          image={props.img}
          title="Post"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.summary}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Link href='/post/[id]' as={props.as}>
        <Button size="small" color="primary">
        Read More
        </Button> 
        </Link>
      </CardActions>
    </Card>
  
) 
export default ImgCard;