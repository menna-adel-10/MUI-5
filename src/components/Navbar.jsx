import { AccountTree, Mail, MailLock, Notifications,  } from '@mui/icons-material'
import { AppBar, Toolbar, styled, Typography, InputBase, Avatar, Badge } from '@mui/material'


const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius
}));
const Icons = styled("Box")(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex"
  }
}));
const UserBox = styled("Box")(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none"
  }
}));

const Navbar = () => {
  return (
    <AppBar position="sticky" color='info'>
      <StyledToolbar>
        <Typography variant='h6' sx={{ display: { xs: "none", sm: "block" } }}>
          Instabook
        </Typography>
        <AccountTree sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="search..." />
        </Search>
        <Icons>
           <Badge badgeContent={134} color='error'>
            <Mail />
          </Badge>
          <Badge badgeContent={3} color='error'>
            <Notifications />
          </Badge>
          <Avatar sx={{ bgcolor: "black", width: 35, height: 35 }}>M</Avatar>
        </Icons>
        <UserBox>
         <Avatar sx={{ bgcolor: "black", width: 35, height: 35 }}>M</Avatar>
        </UserBox>
      </StyledToolbar>
    </AppBar>
  )
}

export default Navbar