import TranslatedText from "../i18n";
import auspiceWNV from "../img/auspice_WNV.png";

function WNV() {
  return (
    <div className="page-section" id="WNV">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-heading">
              <br />
              <br />
              <br />
              <br />
              <hr style={{ height: "15px" }} />
              <TranslatedText textKey="WNV_text_title" />
              <hr style={{ height: "5px" }} />
              <br />
              <br />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <br />
              <TranslatedText textKey="WNV_text_1" />
              <br />
              <br />
              <a href="http://nextstrain.clinbioinfosspa.es/wnv-med" target="_blank" rel="noreferrer">
                <span>
                  <img alt="West Nile Virus circuit" src={auspiceWNV} />
                </span>
              </a>
              <br />
              <a target="_blank" rel="noreferrer" href="http://nextstrain.clinbioinfosspa.es/wnv-med">
                WNV surveillance nextstrain site
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WNV;
