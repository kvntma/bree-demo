// src/components/SuccessModal.tsx
import React from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';
import BirdMail from '../assets/bird.png';

interface SuccessModalProps {
  open: boolean;
  onClose: () => void;
  amount: string; // Add amount to display in message
  transactionId: string; // Add transaction ID to display
}

const SuccessModal: React.FC<SuccessModalProps> = ({
  open,
  onClose,
  amount,
  transactionId
}) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 350,
          bgcolor: 'background.paper',
          boxShadow: 24,
          borderRadius: 2,
          p: 4,
          textAlign: 'center'
        }}
      >
        {/* Image at the top */}
        <Box
          component="img"
          src={BirdMail}
          alt="Success"
          sx={{ width: '100%', mb: 2 }}
        />

        {/* Success message */}
        <Typography variant="h5" color="primary" fontWeight="bold" gutterBottom>
          Success!
        </Typography>

        {/* Transaction details */}
        <Typography variant="body2" color="textSecondary">
          Transit # {transactionId}
        </Typography>
        <Typography variant="body1" mt={1} mb={3}>
          Your request for {amount} has been submitted and will be processed
          shortly.
        </Typography>

        {/* Close button */}
        <Button
          variant="contained"
          color="primary"
          onClick={onClose}
          sx={{ mt: 2 }}
        >
          Close
        </Button>
      </Box>
    </Modal>
  );
};

export default SuccessModal;
