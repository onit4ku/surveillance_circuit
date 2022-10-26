import React from "react";
import ReactDOM from "react-dom";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "./Components/ErrorFallback";
import { AppProvider, NavigationProvider, ReduxProvider, reportWebVitals } from "./features";
import "./index.css";

const Root = () => (
  <React.StrictMode>
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <ReduxProvider>
        <AppProvider>
          <NavigationProvider />
        </AppProvider>
      </ReduxProvider>
    </ErrorBoundary>
  </React.StrictMode>
);

ReactDOM.render(<Root />, document.getElementById("root"));

reportWebVitals();
