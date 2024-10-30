import { Typography, Box, useMediaQuery, useTheme } from '@mui/material';
import { DashboardOverview } from '../styles/AppStyles';
import BirdImage from '../assets/bree-bird.png';
import { availableBalanceAtom } from '../store/bank';
import { useAtomValue } from 'jotai';
import { formatCentsToDollars } from '../helpers/helpers';

const Overview = () => {
  const availableBalance = useAtomValue(availableBalanceAtom);
  const theme = useTheme();
  const isTabletOrHigher = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <DashboardOverview>
      <Box sx={{ gap: '20px', display: 'flex', flexDirection: 'column' }}>
        <Typography variant="inter500" sx={{ fontSize: '36px' }}>
          Hi Alex!
        </Typography>
        <Typography variant="inter400" color="textSecondary">
          Welcome back to Bree!
        </Typography>
        <Typography variant="inter500" color="primary">
          Available Cash Advance Balance:
        </Typography>
        <Typography variant="h4" fontWeight="bold">
          {formatCentsToDollars(availableBalance)}
        </Typography>
      </Box>
      {isTabletOrHigher && <img src={BirdImage} alt="Bird" />}
    </DashboardOverview>
  );
};

export default Overview;
