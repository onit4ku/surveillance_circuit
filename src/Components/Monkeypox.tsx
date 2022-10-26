
import TranslatedText from "../i18n";
import auspiceMonkey from "../img/auspice_monkeypox.png";


function Monkeypox() {
  return (
    <div className="page-section" id="Monkeypox">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-heading">
              <br /><br /><br /><br />
              <hr style={{ height: "15px" }} />
              <TranslatedText textKey="Monkeypox_text_title" />
              <hr style={{ height: "5px" }} />
              <br /><br />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br /><br />
              <TranslatedText textKey="Monkeypox_text_1" />
              <br /><br />
                <a href="http://nextstrain.clinbioinfosspa.es/monkeypox" target="_blank" rel="noreferrer"><span><img alt="Monkeypox circuit" src={auspiceMonkey} /></span></a>
                <br />
                <a target="_blank" rel="noreferrer" href="http://nextstrain.clinbioinfosspa.es/monkeypox">Monkeypox surveillance nextstrain site</a>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Monkeypox




