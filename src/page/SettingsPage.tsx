// src/page/SettingsPage.tsx
import React, { useState } from 'react';
import {
  Typography,
  Switch,
  FormControlLabel,
  Box,
  Button
} from '@mui/material';
import { useAtom } from 'jotai';
import { backdropAtom, toastAtom } from '../store/UI';
import ExampleComponent from '../components/Example';

const SettingsPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [autoUpdate, setAutoUpdate] = useState(false);
  const [, setToast] = useAtom(toastAtom);

  const handleDarkModeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDarkMode(event.target.checked);
    setToast({
      open: true,
      message: `Fake Mode ${event.target.checked ? 'Enabled' : 'Disabled'}`
    });
  };

  const handleNotificationsChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNotifications(event.target.checked);
    setToast({
      open: true,
      message: `Notifications ${event.target.checked ? 'Enabled' : 'Disabled'}`
    });
  };

  const handleAutoUpdateChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setAutoUpdate(event.target.checked);
    setToast({
      open: true,
      message: `Auto Update ${event.target.checked ? 'Enabled' : 'Disabled'}`
    });
  };

  return (
    <Box
      sx={{ padding: 2, display: 'flex', gap: '10px', flexDirection: 'column' }}
    >
      <Typography variant="h4" gutterBottom>
        Settings
      </Typography>
      <FormControlLabel
        control={<Switch checked={darkMode} onChange={handleDarkModeChange} />}
        label="Fake Toggle Switch"
      />
      <FormControlLabel
        control={
          <Switch
            checked={notifications}
            onChange={handleNotificationsChange}
          />
        }
        label="Enable Notifications"
      />
      <FormControlLabel
        control={
          <Switch checked={autoUpdate} onChange={handleAutoUpdateChange} />
        }
        label="Auto Update"
      />

      <ExampleComponent />
    </Box>
  );
};

export default SettingsPage;
