import { useState } from 'react';
import {
  Chip,
  Divider,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  SelectChangeEvent
} from '@mui/material';
import {
  MainContent,
  RequestButton,
  StatusButton,
  TransactionContainer,
  TransactionItem
} from '../styles/AppStyles';
import { initialTransactions, moreTransactions } from '../constants/mockData';
import CustomTooltip from '../components/Tooltip';

const TransactionsPage = () => {
  const [transactions, setTransactions] = useState(initialTransactions);
  const [loadCount, setLoadCount] = useState(0);
  const [filterStatus, setFilterStatus] = useState('All');

  const loadMoreTransactions = () => {
    setTransactions(prevTransactions => [
      ...prevTransactions,
      ...moreTransactions
    ]);
    setLoadCount(prevCount => prevCount + 1);
  };

  const handleFilterChange = (event: SelectChangeEvent<string>) => {
    setFilterStatus(event.target.value as string);
  };

  const filteredTransactions = transactions.filter(
    transaction => filterStatus === 'All' || transaction.status === filterStatus
  );

  return (
    <MainContent>
      <Typography variant="h6">
        Transaction History - {filteredTransactions.length} Transactions
      </Typography>

      <FormControl fullWidth variant="outlined" sx={{ marginBottom: 2 }}>
        <InputLabel>Status</InputLabel>
        <Select
          value={filterStatus}
          onChange={handleFilterChange}
          label="Status"
        >
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="Pending">Pending</MenuItem>
          <MenuItem value="Completed">Completed</MenuItem>
        </Select>
      </FormControl>
      <TransactionContainer>
        {filteredTransactions.map((transaction, index) => (
          <TransactionItem key={index}>
            <Typography variant="body2">{transaction.date}</Typography>
            <Typography variant="body2">{transaction.amount}</Typography>
            <CustomTooltip
              title={transaction.id}
              line1={`Transaction ID: ${transaction.id}`}
              line2={`Repayment Date: ${transaction.repaymentDate}`}
              placement="left-end"
            >
              <StatusButton
                variant="contained"
                color={transaction.status === 'Pending' ? 'warning' : 'primary'}
                size="small"
              >
                {transaction.status}
              </StatusButton>
            </CustomTooltip>
          </TransactionItem>
        ))}
        {loadCount < 2 && (
          <RequestButton
            variant="text"
            fullWidth
            onClick={loadMoreTransactions}
          >
            View More
          </RequestButton>
        )}
        {loadCount === 2 && (
          <Divider sx={{ marginTop: 2 }}>
            <Chip label="End of Transactions" size="small" />
          </Divider>
        )}
        <Typography variant="h6" gutterBottom>
          FAKE DATA ONLY - NOT STATE MANAGED
        </Typography>
      </TransactionContainer>
    </MainContent>
  );
};

export default TransactionsPage;
