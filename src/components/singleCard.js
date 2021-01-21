import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { palette } from "@material-ui/system";

const useStyles = makeStyles({
  root: {
    maxWidth: 345
    // backgroundColor: "#FF8800"
  },
  media: {
    height: 240
  },
  content: {
    height: 120,
    backgroundColor: "#ffcf02"
    // backgroundColor: "#e8f5fc"
  },
  cardButton: {
    backgroundColor: "black",
    color: "white",
    fontWeight: 100
  },
  lightFont: {
    fontWeight: 200
  }
});

export default function SingleCard({ title, image, description }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={image} title={title} />
        <CardContent className={classes.content}>
          <Typography
            className={classes.cardButton}
            gutterBottom
            variant="h5"
            component="h2"
          >
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button> */}
      </CardActions>
    </Card>
  );
}
