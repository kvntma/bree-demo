// src/components/GlobalUI.tsx

import { useAtom } from 'jotai';
import { Backdrop, CircularProgress, Snackbar, Alert } from '@mui/material';
import { backdropAtom, toastAtom } from '../store/UI';

const GlobalUI = () => {
  const [backdropOpen] = useAtom(backdropAtom);
  const [toast, setToast] = useAtom(toastAtom);

  const handleClose = () => {
    setToast({ ...toast, open: false });
  };

  return (
    <>
      <Backdrop
        sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }}
        open={backdropOpen}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Snackbar open={toast.open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={toast.severity || 'info'}
          sx={{ width: '100%' }}
        >
          {toast.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default GlobalUI;
