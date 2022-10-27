import TranslatedText from "../i18n";

import ProportionCharts from "./distribution-chart/ProportionCharts";

function ClinicalInterest() {
  return (
    <div id="clinical-interest">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-heading">
              <br />
              <br />
              <br />
              <br /> <hr style={{ height: "15px" }} />
              <TranslatedText textKey="clinicalInterest_text_title" />
              <hr style={{ height: "5px" }} />
              <br />
              <br />
              <br />
              <br />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <ProportionCharts />
            <br />
            <TranslatedText textKey="clinicalInterest_text_charts" />
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
export default ClinicalInterest;
