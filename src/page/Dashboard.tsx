import {
  Chip,
  Divider,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
  Box,
  useTheme,
  useMediaQuery,
  Grow
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import {
  MainContent,
  RequestButton,
  TransactionContainer,
  TransactionItem,
  StatusButton,
  MainContainer,
  FlexBoxSpaceBetween,
  DateBox,
  AmountBox,
  StatusBox
} from '../styles/AppStyles';
import BreeLogo from '../assets/bree-logo.png';
import DashboardSideBar from '../components/Sidebar';
import Overview from '../components/Overview';
import UserProfile from '../components/UserProfile';
import { useAtom } from 'jotai';
import { navigationTabAtom } from '../store/tabs';
import TransactionsPage from './TransactionsPage';
import { initialTransactions } from '../constants/mockData';
import { useState } from 'react';
import CustomTooltip from '../components/Tooltip';

import SettingsPage from './SettingsPage';
import HelpPage from './HelpPage';
import CashAdvanceModal from '../components/CashAdvanceModal';
import { isTransactionSuccessAtom, lastRequestAtom } from '../store/bank';
import SuccessModal from '../components/SuccessModal';
import { formatCentsToDollars } from '../helpers/helpers';
import HamburgerMenuMobile from '../components/HamburgerMenuMobile';

const Dashboard = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [currentTab] = useAtom(navigationTabAtom);
  const [transactions, setTransactions] = useState(initialTransactions);
  const [isTransactionSuccess, setTransactionSuccess] = useAtom(
    isTransactionSuccessAtom
  );
  const [lastRequest, setLastRequest] = useAtom(lastRequestAtom);

  const [openRequest, setOpenRequest] = useState(false);

  const [sortStatus, setSortStatus] = useState('All');

  const handleSortChange = (event: SelectChangeEvent<string>) => {
    setSortStatus(event.target.value as string);
  };

  const handleOpen = () => {
    setOpenRequest(true);
  };

  const handleClose = () => {
    setOpenRequest(false);
  };

  const sortedTransactions = transactions.filter(
    transaction => sortStatus === 'All' || transaction.status === sortStatus
  );

  {
    console.log(isMobile);
  }
  const renderContent = () => {
    switch (currentTab) {
      case 0:
        return (
          <>
            <Overview />
            <MainContent>
              <Typography variant="h6" gutterBottom>
                Most Recent Transactions
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <FormControl variant="outlined" sx={{ width: 125 }}>
                  <InputLabel>Status Filter</InputLabel>
                  <Select
                    value={sortStatus}
                    onChange={handleSortChange}
                    label="Status"
                  >
                    <MenuItem value="All">All</MenuItem>
                    <MenuItem value="Pending">Pending</MenuItem>
                    <MenuItem value="Completed">Completed</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <TransactionContainer>
                {sortedTransactions
                  .slice(-5)
                  .reverse()
                  .map((transaction, index) => (
                    <TransactionItem key={index}>
                      <DateBox>
                        <Typography variant="body2">
                          {transaction.date}
                        </Typography>
                      </DateBox>
                      <AmountBox>
                        <Typography variant="body2">
                          {transaction.amount}
                        </Typography>
                      </AmountBox>
                      <StatusBox>
                        <CustomTooltip
                          title={transaction.id}
                          line1={`Transaction ID: ${transaction.id}`}
                          line2={`Repayment Date: ${transaction.repaymentDate}`}
                          placement="left-end"
                        >
                          <StatusButton
                            variant="contained"
                            color={
                              transaction.status === 'Pending'
                                ? 'warning'
                                : 'primary'
                            }
                            size="small"
                          >
                            {transaction.status}
                          </StatusButton>
                        </CustomTooltip>
                      </StatusBox>
                    </TransactionItem>
                  ))}
                <Divider sx={{ marginTop: 2 }}>
                  <Chip label="Recent Transactions" size="small" />
                </Divider>
              </TransactionContainer>
            </MainContent>
          </>
        );

      case 1:
        return <TransactionsPage />;
      case 2:
        return (
          <MainContent>
            <SettingsPage />
          </MainContent>
        );
      case 3:
        return (
          <MainContent>
            <HelpPage />
          </MainContent>
        );
      default:
        return null;
    }
  };

  return (
    <MainContainer container spacing={1}>
      {/* Modals */}

      <CashAdvanceModal open={openRequest} onClose={handleClose} />

      <SuccessModal
        open={isTransactionSuccess}
        onClose={() => {
          setTransactionSuccess(false);
          setTransactions(prevTransactions =>
            lastRequest
              ? [
                  ...prevTransactions,
                  {
                    ...lastRequest,
                    amount: `${formatCentsToDollars(lastRequest.amount)} Cash Advance Request`
                  }
                ]
              : prevTransactions
          );
          setLastRequest(null);
        }}
        amount={formatCentsToDollars(lastRequest?.amount || 0)}
        transactionId={lastRequest?.id || ''}
      />
      {/* Header */}
      <Grid size={12}>
        <FlexBoxSpaceBetween>
          <img src={BreeLogo} alt=" Bree Logo" height={67} />
          <UserProfile />
        </FlexBoxSpaceBetween>
      </Grid>
      {/* Sidebar */}
      {!isMobile && (
        <Grid container direction={'column'} spacing={4} size={2}>
          <Typography variant="inter500"> Menu </Typography>
          <DashboardSideBar />
        </Grid>
      )}
      {/* Main Content */}
      {isMobile && <HamburgerMenuMobile />}
      <Grid
        size={{
          lg: 10,
          md: 9,
          sm: 10,
          xs: 10
        }}
        spacing={{
          xs: 0,
          sm: 1,
          md: 1
        }}
      >
        <Grid container direction={'column'} spacing={4}>
          <FlexBoxSpaceBetween>
            <Typography variant="inter900" fontWeight="bold">
              My Dashboard
            </Typography>

            <RequestButton
              variant="contained"
              color="primary"
              onClick={handleOpen}
            >
              Request a Cash Advance
            </RequestButton>
          </FlexBoxSpaceBetween>

          {renderContent()}
        </Grid>
      </Grid>
    </MainContainer>
  );
};

export default Dashboard;
