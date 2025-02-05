import "./styles/App.js";
import { HeadContent } from "./components/header";
import { MainContent } from "./components/main";
import { Box } from "@mui/material";
import { maincontainer } from "./styles/App";

export default function App() {
  return (
      <Box sx={maincontainer}>
        <HeadContent />
        <MainContent />
      </Box>
  );
}
