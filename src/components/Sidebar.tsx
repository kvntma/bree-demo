import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { styled } from '@mui/material/styles';
import HomeIcon from '@mui/icons-material/Home';
import WalletIcon from '@mui/icons-material/Wallet';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { useAtom } from 'jotai';
import { navigationTabAtom } from '../store/tabs';
import { Sidebar } from '../styles/AppStyles';

const StyledListItemButton = styled(ListItemButton)(({ theme, selected }) => ({
  borderRadius: selected ? 12 : theme.shape.borderRadius,
  backgroundColor: selected ? theme.palette.action.selected : 'transparent',
  color: selected ? theme.palette.primary.main : theme.palette.text.primary,
  '&:hover': {
    backgroundColor: theme.palette.action.hover
  },
  marginBottom: theme.spacing(6)
}));

const DashboardSideBar = () => {
  const [value, setValue] = useAtom(navigationTabAtom);

  const theme = useTheme();
  const isTabletOrHigher = useMediaQuery(theme.breakpoints.up('md'));

  const handleChange = (newValue: number) => {
    setValue(newValue);
  };

  return (
    <Sidebar>
      <List>
        <StyledListItemButton
          selected={value === 0}
          onClick={() => handleChange(0)}
        >
          <ListItemIcon sx={{ display: 'flex', justifyContent: 'center' }}>
            <HomeIcon color={value === 0 ? 'primary' : 'inherit'} />
          </ListItemIcon>
          {isTabletOrHigher && <ListItemText primary="Dashboard" />}
        </StyledListItemButton>

        <StyledListItemButton
          selected={value === 1}
          onClick={() => handleChange(1)}
        >
          <ListItemIcon sx={{ display: 'flex', justifyContent: 'center' }}>
            <WalletIcon color={value === 1 ? 'primary' : 'inherit'} />
          </ListItemIcon>
          {isTabletOrHigher && <ListItemText primary="Transactions" />}
        </StyledListItemButton>

        <StyledListItemButton
          selected={value === 2}
          onClick={() => handleChange(2)}
        >
          <ListItemIcon sx={{ display: 'flex', justifyContent: 'center' }}>
            <SettingsIcon color={value === 2 ? 'primary' : 'inherit'} />
          </ListItemIcon>
          {isTabletOrHigher && <ListItemText primary="Settings" />}
        </StyledListItemButton>

        <StyledListItemButton
          selected={value === 3}
          onClick={() => handleChange(3)}
        >
          <ListItemIcon sx={{ display: 'flex', justifyContent: 'center' }}>
            <HelpOutlineIcon color={value === 3 ? 'primary' : 'inherit'} />
          </ListItemIcon>
          {isTabletOrHigher && <ListItemText primary="Help" />}
        </StyledListItemButton>
      </List>
      <Divider />
    </Sidebar>
  );
};

export default DashboardSideBar;
