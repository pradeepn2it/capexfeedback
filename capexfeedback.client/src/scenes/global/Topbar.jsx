import { Box, IconButton, useTheme, Typography } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box
      sx={{ boxShadow: '0 1px 15px 0px' }}
      // display="flex"
      style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 10 }}
      backgroundColor={colors.primary[700]}
      justifyContent="space-between"
      p={2}
    >
      {/* LOGO */}
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <img alt="T" src="/assets/logo.svg" style={{ width: '50px' }} />
        <Typography variant="h2" sx={{ marginLeft: 2, color: "#ffffff" }}>
          CFS CapEx Feedback System
        </Typography>
      </Box>


      {/* ICONS AND CAPEX */}
      {/* <Box display="flex" alignItems="center">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>

      </Box> */}
    </Box>
  );
};

export default Topbar;
