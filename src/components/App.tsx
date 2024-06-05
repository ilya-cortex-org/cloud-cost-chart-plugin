import type React from "react";
import {
  PluginProvider,
  Stack,
  Title,
} from "@cortexapps/plugin-core/components";
import "../baseStyles.css";
import ErrorBoundary from "./ErrorBoundary";
import LineChart from "./LineChart";

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <PluginProvider>
        <Stack>
          <Title level={1}>Cloud costs in the last 8 weeks</Title>
        </Stack>
        <LineChart />
      </PluginProvider>
    </ErrorBoundary>
  );
};

export default App;
