import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Grid, LinearProgress, Typography } from "@material-ui/core";
import FoodCard from "../../components/foodcard/FoodCard";
import { getMyFood } from "../../redux/food/foodActions";
import useStyles from "./styles";

const MyFoodPage = ({ history }) => {
  const classes = useStyles();
  const { user } = useSelector((state) => state.userLogin);
  const { foods, loading } = useSelector((state) => state.myfood);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!user) {
      history.push("/signin");
    }
    if (!user?.isChef) {
      history.push("/home");
    } else {
      dispatch(getMyFood());
    }
  }, [history, user, dispatch]);

  return (
    <>
      {loading && <LinearProgress />}
      <Typography variant="h4" className={classes.header} color="primary">
        You food items
      </Typography>
      <Box className={classes.container}>
        <Grid container spacing={4}>
          {foods &&
            foods.map((food) => (
              <Grid item md={3} key={food._id}>
                {console.log(food)}
                <FoodCard food={food} />
              </Grid>
            ))}
        </Grid>
      </Box>
    </>
  );
};

export default MyFoodPage;
