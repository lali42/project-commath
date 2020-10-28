import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { useNavigate } from "react-router-dom";
import "../../src/css/style.css";
import Lottie from "react-lottie";
import animationData from "../../src/lottie/29138-lottie-animation.json";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  // '@global': {
  //   ul: {
  //     margin: 0,
  //     padding: 0,
  //     listStyle: 'none',
  //   },
  // },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: "wrap",
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 0),
  },
  btcolor: {
    backgroundColor: '#E8505B',
  }

  // cardHeader: {
  //   backgroundColor:
  //     theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
  // },
  // footer: {
  //   borderTop: `1px solid ${theme.palette.divider}`,
  //   marginTop: theme.spacing(8),
  //   paddingTop: theme.spacing(3),
  //   paddingBottom: theme.spacing(3),
  //   [theme.breakpoints.up('sm')]: {
  //     paddingTop: theme.spacing(6),
  //     paddingBottom: theme.spacing(6),
  //   },
  // },
}));

export default function Home() {
  const classes = useStyles();
  const navigate = useNavigate();

  const nextPage = (page) => {
    navigate("/project-commath/" + page);
  };

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
      <div>
        <Lottie options={defaultOptions} height={400} width={400} />
      </div>
      <React.Fragment>
        <CssBaseline />
        {/* <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            61114440531 Muthita Munmueang
          </Typography>
        </Toolbar>
      </AppBar> */}
        {/* Hero unit */}
        <Container
          maxWidth="sm"
          component="main"
          className={classes.heroContent}
        >
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
            style={{marginTop:-65}}
          >
            เนื้อหาการเรียนรู้มี 6 บทดังนี้
          </Typography>
          {/* <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            component="p"
          >
            เนื้อหาการเรียนรู้มี 6 บทดังนี้
          </Typography> */}
        </Container>
        {/* End hero unit */}
        <Container maxWidth="md" component="main">
          <Grid container spacing={5} alignItems="flex-end">
            <Grid item xs={12} sm={6} md={4}>
              <Card className="cardd">
                <CardHeader
                  title="บทที่ 1"
                  titleTypographyProps={{ align: "center" }}
                  subheaderTypographyProps={{ align: "center" }}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <Typography
                    component="h5"
                    variant="h5"
                    color="textPrimary"
                    align="center"
                  >
                    Basic Computing
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button className={classes.btcolor}
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      nextPage("b2s");
                    }}
                  >
                    เลือก
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardHeader
                  title="บทที่ 2"
                  titleTypographyProps={{ align: "center" }}
                  subheaderTypographyProps={{ align: "center" }}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <Typography
                    component="h5"
                    variant="h5"
                    color="textPrimary"
                    align="center"
                  >
                    Linear Equations
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button className={classes.btcolor}
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      nextPage("elimination");
                    }}
                  >
                    เลือก
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardHeader
                  title="บทที่ 3"
                  titleTypographyProps={{ align: "center" }}
                  subheaderTypographyProps={{ align: "center" }}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <Typography
                    component="h5"
                    variant="h5"
                    color="textPrimary"
                    align="center"
                  >
                    Interpolation
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button className={classes.btcolor}
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      nextPage("interpolation");
                    }}
                  >
                    เลือก
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardHeader
                  title="บทที่ 4"
                  titleTypographyProps={{ align: "center" }}
                  subheaderTypographyProps={{ align: "center" }}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <Typography
                    component="h5"
                    variant="h5"
                    color="textPrimary"
                    align="center"
                  >
                    Differentiation
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button className={classes.btcolor}
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      nextPage("differentiation");
                    }}
                  >
                    เลือก
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardHeader
                  title="บทที่ 5"
                  titleTypographyProps={{ align: "center" }}
                  subheaderTypographyProps={{ align: "center" }}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <Typography
                    component="h5"
                    variant="h5"
                    color="textPrimary"
                    align="center"
                  >
                    Integration
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button className={classes.btcolor}
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      nextPage("integration");
                    }}
                  >
                    เลือก
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardHeader
                  title="บทที่ 6"
                  titleTypographyProps={{ align: "center" }}
                  subheaderTypographyProps={{ align: "center" }}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <Typography
                    component="h5"
                    variant="h5"
                    color="textPrimary"
                    align="center"
                  >
                    Root Finding
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button className={classes.btcolor}
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      nextPage("root-finding");
                    }}
                  >
                    เลือก
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>
        {/* Footer */}
        {/* <Container maxWidth="md" component="footer" className={classes.footer}>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container> */}
        {/* End footer */}
      </React.Fragment>
    </div>
  );
}
