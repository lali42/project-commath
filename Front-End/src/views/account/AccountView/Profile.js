import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
  makeStyles,
} from "@material-ui/core";
import ImgPro from "../../../../src/Profile.jpg";
import Lottie from "react-lottie";
import animationData from "../../../../src/lottie/27637-welcome.json";

const user = {
  // avatar: { ImgPro },
  city: "61114440557",
  name: "Lalita Suwanna",
};

const useStyles = makeStyles(() => ({
  root: {},
  avatar: {
    height: 200,
    width: 200,
  },
  name: {
    fontSize: 50,
  },
  UID: {
    fontSize: 40,
  },
}));

const Profile = ({ className, ...rest }) => {
  const classes = useStyles();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <Card className={clsx(classes.root, className)} {...rest}>
        <CardContent>
          <Box alignItems="center" display="flex" flexDirection="column">
            {/* <Avatar className={classes.avatar} src={ImgPro} /> */}
            <div>
              <Lottie options={defaultOptions} height={400} width={400} />
            </div>
            <Divider />
            <Typography
              color="textSecondary"
              variant="h2"
              style={{
                marginTop: 25,
              }}
            >
              {`${user.city}`}
            </Typography>

            <Typography
              color="textPrimary"
              gutterBottom
              variant="h1"
              style={{
                marginTop: 25,
              }}
            >
              {user.name}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
};

Profile.propTypes = {
  className: PropTypes.string,
};

export default Profile;
