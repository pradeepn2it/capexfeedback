import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";

import InitiateFeedback from './capex-feedback/InitiateFeedback.jsx'

import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";
import IEFeedback from "./capex-feedback/IEFeedback.jsx"
import MeScreens from "./capex-feedback/MeScreens.jsx";
import MaintainenceForm from "./capex-feedback/MaintainenceForm.jsx";
import ProjectForm from './capex-feedback/ProjectForm.jsx'

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} style={{ paddingTop: '80px', marginTop:'500px' }}/>
          <main className="content" style={{ paddingTop: '80px' }}> {/* Add padding to push content down */}
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/InitiateFeedback" element={<InitiateFeedback />} />
              <Route path="/Ie-feedback" element={<IEFeedback />} />
              <Route path="/Me-screens" element={<MeScreens />} />
              <Route path="/Maintainence-form" element={<MaintainenceForm/>} />
              <Route path="/Project-form" element={<ProjectForm />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} />
            </Routes>
          </main>
        </div>

      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
