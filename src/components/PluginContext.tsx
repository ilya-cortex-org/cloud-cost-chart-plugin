import { Title, usePluginContext } from "@cortexapps/plugin-core/components";
import type React from "react";

const PluginContext: React.FC = () => {
  const context = usePluginContext();

  return (
    <>
      <div style={{ display: "none" }}>
        <Title level={2}>Plugin context</Title>
        <pre>{JSON.stringify(context, null, 2)}</pre>
      </div>
    </>
  );
};

export default PluginContext;
