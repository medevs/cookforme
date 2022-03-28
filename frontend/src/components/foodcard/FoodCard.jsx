import React from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { AiOutlineStar } from "react-icons/ai";
import useStyles from "./styles";

const FoodCard = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <img
        alt="food_img"
        src="https://drop.ndtv.com/albums/COOKS/pasta-vegetarian/pastaveg_640x480.jpg"
        className={classes.img}
      />
      <Button className={classes.button} variant="contained">
        hinzufügen
      </Button>
      <Box display="flex" mt={3} justifyContent="space-between">
        <Typography variant="h5" className={classes.foodName}>
          Test Food
        </Typography>
        <Typography variant="h5" className={classes.price}>
          $ 150
        </Typography>
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Typography color="textSecondary">by Chef John Doe</Typography>
        <Box display="flex" alignItems="center">
          <AiOutlineStar className={classes.star} />
          <Typography color="textSecondary" className={classes.rating}>
            {" "}
            4.5
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};

export default FoodCard;