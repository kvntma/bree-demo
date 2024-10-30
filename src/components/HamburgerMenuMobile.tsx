import React, { useState } from 'react';
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Drawer,
  IconButton,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import WalletIcon from '@mui/icons-material/Wallet';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { useAtom } from 'jotai';
import { navigationTabAtom } from '../store/tabs';

const StyledListItemButton = styled(ListItemButton)(({ theme, selected }) => ({
  borderRadius: selected ? 12 : theme.shape.borderRadius,
  backgroundColor: selected ? theme.palette.action.selected : 'transparent',
  color: selected ? theme.palette.primary.main : theme.palette.text.primary,
  '&:hover': {
    backgroundColor: theme.palette.action.hover
  },
  marginBottom: theme.spacing(6)
}));

const HamburgerMenuMobile = () => {
  const [value, setValue] = useAtom(navigationTabAtom);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isTabletOrHigher = useMediaQuery(theme.breakpoints.up('md'));

  const handleChange = (newValue: number) => {
    setValue(newValue);
    setDrawerOpen(false); // Close the drawer when a menu item is selected
  };

  const toggleDrawer = () => {
    setDrawerOpen(prev => !prev);
  };

  const menuItems = [
    { label: 'Dashboard', icon: <HomeIcon />, index: 0 },
    { label: 'Transactions', icon: <WalletIcon />, index: 1 },
    { label: 'Settings', icon: <SettingsIcon />, index: 2 },
    { label: 'Help', icon: <HelpOutlineIcon />, index: 3 }
  ];

  return (
    <>
      {/* Hamburger Menu Icon */}
      {!isTabletOrHigher && (
        <IconButton
          onClick={toggleDrawer}
          sx={{ position: 'sticky', top: 100, left: 16, width: 48, height: 48 }}
        >
          <MenuIcon />
        </IconButton>
      )}

      {/* Sidebar Drawer */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        variant={'temporary'}
        sx={{
          '& .MuiDrawer-paper': {
            width: 240,
            boxSizing: 'border-box'
          }
        }}
      >
        <List>
          {menuItems.map(({ label, icon, index }) => (
            <StyledListItemButton
              key={label}
              selected={value === index}
              onClick={() => handleChange(index)}
            >
              <ListItemIcon>
                {React.cloneElement(icon, {
                  color: value === index ? 'primary' : 'inherit'
                })}
              </ListItemIcon>
              <ListItemText primary={label} />
            </StyledListItemButton>
          ))}
        </List>
        <Divider />
      </Drawer>
    </>
  );
};

export default HamburgerMenuMobile;
