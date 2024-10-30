import React from 'react';
import { Tooltip, TooltipProps, Typography, styled, Box } from '@mui/material';

interface CustomTooltipProps extends TooltipProps {
  line1: string;
  line2: string;
}

const StyledTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .MuiTooltip-tooltip`]: {
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    fontSize: theme.typography.pxToRem(14),
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(1)
  },
  [`& .MuiTooltip-arrow`]: {
    color: theme.palette.primary.main
  }
}));

const CustomTooltip: React.FC<CustomTooltipProps> = ({
  line1,
  line2,
  children,
  ...props
}) => {
  const { title, ...restProps } = props;
  return (
    <StyledTooltip
      title={
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant="inter400">{line1}</Typography>
          <Typography variant="inter400">{line2}</Typography>
        </Box>
      }
      arrow
      {...restProps}
    >
      {children}
    </StyledTooltip>
  );
};

export default CustomTooltip;
