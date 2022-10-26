import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import MmpApi from "../../apis/MmpApi";
import selectedRegionState from "./selectedRegionState";

// import data from '../data/data-andalucia';
import LineageChart from "./LineageChart";
import { ResponsiveContainer } from "recharts";

const AbortController = window.AbortController;

function translateRegion(region: string) {
  switch (region) {
    case "andalucia":
      return "";
    case "almeria":
      return "Almería";
    case "cadiz":
      return "Cádiz";
    case "cordoba":
      return "Córdoba";
    case "granada":
      return "Granada";
    case "huelva":
      return "Huelva";
    case "jaen":
      return "Jaén";
    case "malaga":
      return "Málaga";
    case "sevilla":
      return "Sevilla";
    default:
      return "";
  }
}

function SelectedChart() {
  const [region, _] = useRecoilState(selectedRegionState);
  const [busy, setBusy] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState(undefined as any);

  useEffect(
    () => {
      const abortController = new AbortController();
      const { signal: abortSignal } = abortController;
      (async () => {
        try {
          setError(false);
          setBusy(true);
          const serverData = await MmpApi.getTimeseries(translateRegion(region), abortSignal);
          setData(serverData);
        } catch (error) {
          if ("AbortError" !== (error as Error).name) {
            setError(true);
          }
        } finally {
          setBusy(false);
        }
      })();
      return () => {
        abortController.abort();
      };
    },
    [region]
  );

  if (!!busy) {
    // return <CircularProgress />
    return (
      <ResponsiveContainer width="100%" aspect={1.8}>
        <div style={{ width: "100%", height: "100%" }}>
          <span>Reading data from server...</span>
        </div>
      </ResponsiveContainer>
    );
  } else if (!!error) {
    return (
      <ResponsiveContainer width="100%" aspect={1.8}>
        <div style={{ width: "100%", height: "100%" }}>
          <span>Error reading data from server.</span>
        </div>
      </ResponsiveContainer>
    );
  } else {
    return <LineageChart data={data} />;
  }
}

export default SelectedChart;
