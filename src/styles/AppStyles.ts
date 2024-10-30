// src/styles.js
import { styled } from '@mui/material/styles';
import { Box, Paper, Button, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';

// Sidebar Styles
export const Sidebar = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  marginTop: '12px',
  [theme.breakpoints.down('md')]: {
    maxWidth: '80px'
  }
}));

export const SidebarMenuTitle = styled(Typography)({
  fontWeight: 'bold'
});

export const SidebarItem = styled(Typography)({
  marginBottom: '0.5rem'
});

// Main Content Wrapper
export const MainContent = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  flexGrow: 1
}));

export const MainContainer = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(1),
  background: theme.palette.background.default,
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%'
}));

// Header Styles
export const HeaderContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
});

export const ProfileContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem'
});

export const RequestButton = styled(Button)(({ theme }) => ({
  borderRadius: '8px',
  padding: '12px',
  [theme.breakpoints.down('md')]: {
    padding: '10px',
    fontSize: '0.875rem'
  }
}));

// Dashboard Overview Styles
export const DashboardOverview = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
}));

// Transaction History Styles
export const TransactionContainer = styled(Box)({
  padding: '1rem 0'
});

export const TransactionItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.spacing(1, 0),
  borderBottom: `1px solid ${theme.palette.divider}`
}));

export const StatusButton = styled(Button)({
  textTransform: 'none',
  width: 125
});

// Boxes

export const FlexBoxSpaceBetween = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '1rem'
});

export const DateBox = styled(Box)({
  width: '20%',
  wordWrap: 'break-word'
});

export const AmountBox = styled(Box)({
  width: '30%',
  wordWrap: 'break-word'
});

export const StatusBox = styled(Box)({
  width: '20%',
  display: 'flex',
  justifyContent: 'flex-end',
  wordWrap: 'break-word'
});
