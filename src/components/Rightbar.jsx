import { Box, Typography, AvatarGroup, Avatar, ImageList, ImageListItem} from '@mui/material'
import {Src} from "../assets/Data/ImgData"


const Rightbar = () => {
  return (
    <Box
      flex={2}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <Box position="fixed" width={300}>
        <Typography variant="h6" fontWeight={100}>Online Friends</Typography>
        <AvatarGroup max={4}>
          <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
          <Avatar alt="Travis Howard" src="https://material-ui.com/static/images/avatar/2.jpg" />
          <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/3.jpg" />
          <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/6.jpg" />
          <Avatar alt="Cindy Baker" src="" />
          <Avatar alt="Agnes Walker" src="https://material-ui.com/static/images/avatar/4.jpg" />
          <Avatar alt="Trevor Henderson" src="https://material-ui.com/static/images/avatar/5.jpg" />
        </AvatarGroup> 
        <Typography variant="h6" fontWeight={100}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          {Src.map((item, index) => (
            <ImageListItem key={item.index}>
               <img src={item.img} alt={`Image ${index}`} />
     
            </ImageListItem>
             ))}
        </ImageList>
      </Box>
    </Box>
  )
}

export default Rightbar