import type React from "react";
import {
  Logo,
  PluginProvider,
  Stack,
  Title,
} from "@cortexapps/plugin-core/components";
import "../baseStyles.css";
import ErrorBoundary from "./ErrorBoundary";
import LineChart from "./LineChart";

import PluginContext from "./PluginContext";

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <PluginProvider>
        <Stack>
          <Logo />
          <Title level={1}>Line Chart Example</Title>
        </Stack>
        <LineChart />
        <PluginContext />
      </PluginProvider>
    </ErrorBoundary>
  );
};


export default App;
