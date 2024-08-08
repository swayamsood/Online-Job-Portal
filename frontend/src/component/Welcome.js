import { Grid, Typography, CardMedia } from "@material-ui/core";

import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button, CardActionArea, CardActions } from '@mui/material';

// import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Welcome = (props) => {
  return (
      <Grid 
        style={{
          display: "flex",
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems:"center",
          overflow:"hidden"
        }}
        item
      >
        <div style={{display:"flex", flexDirection:"column", marginRight:"6vw"}}>
           <span><img src="/images/role-collection.png" style={{height:"100px", left:"0%"}}/></span>
          <Typography variant="h4">Discover job across</Typography>
          <Typography variant="h4">popular roles</Typography>
          {/* <Typography variant="h6">Select a role and we'll show you relevant jobs for it!</Typography> */}
          <ListItemText secondary="Select a role and we'll show you relevant jobs for it!" style={{marginTop:"15px"}}/>



        </div>


        <div style={{marginLeft:"6vw"}}>
          <CardMedia
            component="img"
            height="200"
            image="/images/welcome.jpg"
            alt="Paella"
            style={{ padding: "20px", minHeight: "60vh", objectFit:"contain", width:"100vh" }}
          />
        </div>
      </Grid>
  );
};

export const ErrorPage = (props) => {
  return (
    <Grid
      container
      item
      direction="column"
      alignItems="center"
      justify="center"
      style={{ padding: "30px", minHeight: "93vh" }}
    >
      <Grid item>
        <Typography variant="h2">Error 404</Typography>
      </Grid>
    </Grid>
  );
};

export default Welcome;
