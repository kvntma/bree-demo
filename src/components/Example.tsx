// Example usage in a component
import { useAtom } from 'jotai';
import { Button } from '@mui/material';
import { backdropAtom, toastAtom } from '../store/UI';

const ExampleComponent = () => {
  const [, setBackdropOpen] = useAtom(backdropAtom);
  const [, setToast] = useAtom(toastAtom);

  const handleShowBackdrop = () => {
    setBackdropOpen(true);
    setTimeout(() => setBackdropOpen(false), 3000);
  };

  const handleShowToast = () => {
    setToast({ open: true, message: 'This is a toast notification!' });
  };

  return (
    <div>
      <Button variant="contained" onClick={handleShowBackdrop}>
        Show Backdrop
      </Button>
      <Button variant="contained" onClick={handleShowToast}>
        Show Toast
      </Button>
    </div>
  );
};

export default ExampleComponent;
