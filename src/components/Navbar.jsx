import { AccountTree, Mail, Notifications,  } from '@mui/icons-material'
import { AppBar, Toolbar, styled, Menu, Typography, InputBase, Avatar, Badge, MenuItem } from '@mui/material'
import { useState } from 'react';


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
const [open, setOpen] = useState(false)

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
          <Avatar
            sx={{ bgcolor: "black", width: 35, height: 35 }}
            onClick={e=>setOpen(true)}>M</Avatar>
        </Icons>
        <UserBox onClick={e=>setOpen(true)}>
         <Avatar sx={{ bgcolor: "black", width: 35, height: 35 }}>M</Avatar>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-menu"
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        open={open}
        onClose={(e) => setOpen(false)}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar