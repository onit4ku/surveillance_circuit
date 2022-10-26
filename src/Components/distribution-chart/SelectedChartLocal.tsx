import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import selectedRegionState from "./selectedRegionState";

import LineageChart from "./LineageChart";
import { ResponsiveContainer } from "recharts";

import dataandalucia from "../../data/andalucia.json";
import dataalmeria from "../../data/almeria.json";
import datacadiz from "../../data/cadiz.json";
import datacordoba from "../../data/cordoba.json";
import datagranada from "../../data/granada.json";
import datahuelva from "../../data/huelva.json";
import datajaen from "../../data/jaen.json";
import datamalaga from "../../data/malaga.json";
import datasevilla from "../../data/sevilla.json";

const dataMap = {
  andalucia: dataandalucia,
  almeria: dataalmeria,
  cadiz: datacadiz,
  cordoba: datacordoba,
  granada: datagranada,
  huelva: datahuelva,
  jaen: datajaen,
  malaga: datamalaga,
  sevilla: datasevilla
};

for (const region in dataMap) {
  const data = dataMap[region];
  for (const item of data) {
    item.date = Date.parse(item.date);
  }
}

function SelectedChart() {
  const [region, _] = useRecoilState(selectedRegionState);
  const [busy, setBusy] = useState(true);
  const [error, setError] = useState(false);

  const data = dataMap[region];
  return <LineageChart data={data} />;
}

export default SelectedChart;
