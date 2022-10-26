import React from "react";
// import { Col, Container, Row } from 'react-bootstrap';
import RegionSelector from "./RegionSelector";
import SelectedChart from "./SelectedChartLocal";

function ProportionCharts() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-md-12 col-md-offset-2">
          <RegionSelector />
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 col-md-12 col-md-offset-2">
          <SelectedChart />
        </div>
      </div>
    </div>
  );
}

export default ProportionCharts;
