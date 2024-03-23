import {Box, Card, CardHeader, Typography, IconButton, CardMedia, CardContent, CardActions, Avatar, } from '@mui/material'
import { CheckBox, Share, MoreVert, Favorite, FavoriteBorder } from '@mui/icons-material';


const Feed = () => {
  return (
    <Box flex={4} p={2}>
      <Card>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "limegreen" }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Smoked Bacon Pizza"
        subheader="Sep 14, 2024"
      />
      <CardMedia
        component="img"
          height="20%"
          width="100%"
        image="https://images.pexels.com/photos/13302778/pexels-photo-13302778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <CheckBox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
    </Box>
  )
}

export default Feed