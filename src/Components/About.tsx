import TranslatedText from "../i18n";
import circuitImg1 from "../img/image1.png";
import diagramFigure from "../img/sarscov2_workflow_diagram.png";

import circuitImg2 from "../img/figuras.pptx.svg";
import phylogeny from "../img/phylogeny.png";
import geography from "../img/geography.png";

function About() {
  return (
    <div className="page-section" id="about">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-heading">
              <br />
              <br />
              <br />
              <br />
              <hr style={{ height: "15px" }} />
              <TranslatedText textKey="about_text_title" />
              <hr style={{ height: "5px" }} />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <img src={circuitImg2} className="img-responsive center-block" alt="sequencing circuit" />
              <br />
              <br />
              <TranslatedText textKey="about_text_fig1" />
              <br />
              <br />
              <TranslatedText textKey="about_text_1" />
              <br />
              <br />
              <div className="table-responsive">
                <table className="table table-bordered table-striped table-hover" style={{ textAlign: "center" }}>
                  <tbody>
                    <tr>
                      <td colSpan={1} rowSpan={1}>
                        <p>Province</p>
                      </td>
                      <td colSpan={1} rowSpan={1}>
                        <p>Sampling Hospital</p>
                      </td>
                      <td colSpan={1} rowSpan={1}>
                        <p>Reference Hospital</p>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={1} rowSpan={1}>
                        <p>Almería</p>
                      </td>
                      <td colSpan={1} rowSpan={1}>
                        <p>H.U. Torrecárdenas</p>
                      </td>
                      <td colSpan={1} rowSpan={1}>
                        <p>H.U. San Cecilio</p>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={1} rowSpan={1}>
                        <p>Jaén</p>
                      </td>
                      <td colSpan={1} rowSpan={1}>
                        <p>H.U. de Jaén</p>
                      </td>
                      <td colSpan={1} rowSpan={1}>
                        <p>H.U. San Cecilio</p>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={1} rowSpan={1}>
                        <p>Granada</p>
                      </td>
                      <td colSpan={1} rowSpan={1}>
                        <p>H.U. San Cecilio</p>
                      </td>
                      <td colSpan={1} rowSpan={1}>
                        <p>H.U. San Cecilio</p>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={1} rowSpan={1}>
                        <p>Málaga</p>
                      </td>
                      <td colSpan={1} rowSpan={1}>
                        <p>H.U. Virgen de la Victoria</p>
                      </td>
                      <td colSpan={1} rowSpan={1}>
                        <p>H.U. San Cecilio</p>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={1} rowSpan={1}>
                        <p>Cádiz</p>
                      </td>
                      <td colSpan={1} rowSpan={1}>
                        <p>H.U. Puerta del Mar</p>
                      </td>
                      <td colSpan={1} rowSpan={1}>
                        <p>H.U. Virgen del Rocío</p>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={1} rowSpan={1}>
                        <p>Córdoba</p>
                      </td>
                      <td colSpan={1} rowSpan={1}>
                        <p>H.U. Reina Sofía</p>
                      </td>
                      <td colSpan={1} rowSpan={1}>
                        <p>H.U. Virgen del Rocío</p>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={1} rowSpan={1}>
                        <p>Huelva</p>
                      </td>
                      <td colSpan={1} rowSpan={1}>
                        <p>H.U. Juan Ramón Jiménez</p>
                      </td>
                      <td colSpan={1} rowSpan={1}>
                        <p>H.U. Virgen del Rocío</p>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={1} rowSpan={1}>
                        <p>Sevilla</p>
                      </td>
                      <td colSpan={1} rowSpan={1}>
                        <p>H.U. Virgen del Rocío</p>
                      </td>
                      <td colSpan={1} rowSpan={1}>
                        <p>H.U. Virgen del Rocío</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <TranslatedText textKey="about_text_Table1" />
                <br />
              </div>
              <TranslatedText textKey="about_text_2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
