import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  TextField,
  Button,
  IconButton,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Box,
  CircularProgress
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useAtom } from 'jotai';
import {
  addMonths,
  formatCentsToDollars,
  formatDate,
  generateId,
  parseDollarsToCents
} from '../helpers/helpers';
import {
  availableBalanceAtom,
  isTransactionSuccessAtom,
  lastRequestAtom
} from '../store/bank';
import { backdropAtom, toastAtom } from '../store/UI';

interface CashAdvanceModalProps {
  open: boolean;
  onClose: () => void;
}

const CashAdvanceModal: React.FC<CashAdvanceModalProps> = ({
  open,
  onClose
}) => {
  const [account, setAccount] = useState('48621587');
  const [, setToast] = useAtom(toastAtom);
  const [, setBackdropOpen] = useAtom(backdropAtom);
  const [, setIsTransactionSuccess] = useAtom(isTransactionSuccessAtom);
  const [, setLastRequest] = useAtom(lastRequestAtom);
  const [availableBalance, setAvailableBalance] = useAtom(availableBalanceAtom);
  const [amount, setAmount] = useState(availableBalance);
  const [displayAmount, setDisplayAmount] = useState(
    formatCentsToDollars(availableBalance)
  );
  const [deliveryOption, setDeliveryOption] = useState('Standard Delivery');

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDisplayAmount(e.target.value);
    setError('');
  };

  const handleAmountBlur = () => {
    const amountInCents = parseDollarsToCents(displayAmount);

    if (isNaN(amountInCents)) {
      setError('Please enter a valid number.');
    } else if (amountInCents <= 0) {
      setError('Requested amount must be greater than $0!');
      setDisplayAmount(formatCentsToDollars(0));
    } else if (amountInCents > availableBalance) {
      setError(
        `Requested amount exceeds available balance of ${formatCentsToDollars(availableBalance)}.`
      );
      setDisplayAmount(formatCentsToDollars(0));
    } else {
      setAmount(amountInCents);
      setDisplayAmount(formatCentsToDollars(amountInCents));
    }
  };

  const handleSubmit = () => {
    if (amount > availableBalance) {
      setError('Request amount exceeds available balance.');
      return;
    }

    if (amount <= 0) {
      setError('Requested amount must be greater than $0!');
      return;
    }

    if (availableBalance <= 0) {
      setError('No available balance to request from.');
      return;
    }

    if (error) {
      setToast({
        open: true,
        message: 'Please correct the errors before submitting',
        severity: 'error'
      });
      return;
    }

    // Start loading spinner
    setLoading(true);
    setBackdropOpen(true);

    // Simulate API call or processing delay
    setTimeout(() => {
      setLoading(false);
      setAvailableBalance(prevBalance => prevBalance - amount);

      setToast({
        open: true,
        message: 'Cash advance requested successfully!',
        severity: 'success'
      });
      onClose();
      setBackdropOpen(false);
      setIsTransactionSuccess(true);

      setLastRequest({
        id: generateId(),
        date: formatDate(Date.now()),
        repaymentDate: formatDate(addMonths(new Date(), 1).getTime()),
        amount,
        status: 'Pending'
      });

      // Reset form values

      setAmount(0);
      setDisplayAmount(formatCentsToDollars(0));
    }, 2000);
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      {!loading && (
        <>
          <DialogTitle>
            <Typography variant="inter500" color="primary">
              Request a Cash Advance
            </Typography>
            <IconButton
              aria-label="close"
              onClick={onClose}
              sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: theme => theme.palette.grey[500]
              }}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent dividers>
            <Typography variant="body2" color="textSecondary" gutterBottom>
              We all about trust, transparency, and making your satisfaction #1
              with <strong>NO hidden fees or penalties </strong>
              (We’re friends remember?)
            </Typography>

            <Box mt={2}>
              <FormControl fullWidth margin="normal">
                <InputLabel>Account</InputLabel>
                <Select
                  value={account}
                  onChange={e => setAccount(e.target.value as string)}
                  label="Account"
                >
                  <MenuItem value="48621587">Primary Account: 9392386</MenuItem>
                </Select>
              </FormControl>

              <TextField
                label="Request Amount"
                fullWidth
                margin="normal"
                value={displayAmount}
                onChange={handleAmountChange}
                onBlur={handleAmountBlur}
                error={!!error}
                helperText={error}
              />

              <FormControl fullWidth margin="normal">
                <InputLabel>Delivery Option</InputLabel>
                <Select
                  value={deliveryOption}
                  onChange={e => setDeliveryOption(e.target.value as string)}
                  label="Delivery Option"
                >
                  <MenuItem value="Standard Delivery">
                    Standard Delivery
                  </MenuItem>
                  <MenuItem value="Express Delivery">Express Delivery</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </DialogContent>
          <DialogActions sx={{ marginTop: 2 }}>
            <Button onClick={onClose} color="primary">
              Cancel
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              disabled={loading}
            >
              Submit
            </Button>
          </DialogActions>
        </>
      )}

      {/* Loading spinner overlay */}

      {loading && (
        <Box
          sx={{
            height: 475,
            display: 'flex',
            alignItems: 'center',
            justifyContent: ' center'
          }}
        >
          <CircularProgress color="inherit" />
        </Box>
      )}
    </Dialog>
  );
};

export default CashAdvanceModal;
