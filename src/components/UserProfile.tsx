import { Avatar, Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import theme from '../theme';

// Styled container for the avatar pill
const AvatarPill = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.spacing(4),
  padding: theme.spacing(1, 2),
  boxShadow: theme.shadows[1],
  width: 275
}));

// Styled box for text
const TextContainer = styled(Box)(({ theme }) => ({
  marginLeft: theme.spacing(2)
}));

const UserProfile = () => {
  return (
    <AvatarPill>
      <TextContainer>
        <Typography variant="body1" fontWeight="bold">
          Alex Bree
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Alex@trybree.com
        </Typography>
      </TextContainer>
      <Avatar sx={{ bgcolor: theme.palette.primary.main }}>N</Avatar>
    </AvatarPill>
  );
};

export default UserProfile;
