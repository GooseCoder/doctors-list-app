import React from "react";
import { Box, Button, Grommet, Header, Menu } from "grommet";
import ListDoctors from "./ListDoctors";
import { DoctorProvider } from "./context/DoctorContext";
import FilterBar from "./FilterBar";
import { Home } from "grommet-icons";

const theme = {
  global: {
    colors: {
      brand: "#228BE6",
    },
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
  },
};

const App = (): React.ReactElement => {
  return (
    <Grommet theme={theme}>
      <DoctorProvider>
        <Header background="brand">
          <Button icon={<Home />} hoverIndicator />
          <Menu label="My Account" items={[{ label: "logout" }]} />
        </Header>
        <Box gap="small" margin="small">
          <FilterBar />
          <ListDoctors />
        </Box>
      </DoctorProvider>
    </Grommet>
  );
};

export default App;
