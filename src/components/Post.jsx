import { Checkbox, Card, CardHeader, Typography, IconButton, CardMedia, CardContent, CardActions, Avatar, } from '@mui/material'
import { Share, MoreVert, Favorite, FavoriteBorder } from '@mui/icons-material';

const Post = () => {
  return (
     <Card sx={{m: 5}}>
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
          <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color: 'red'}}/>} />
        </IconButton>
        <IconButton aria-label="share">
            <Share />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default Post