import TranslatedText from "../i18n";

export default function Contact() {
  return (
    <div id="contact" className="page-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-heading">
              <br />
              <br />   <hr style={{ height:"15px"}} />
              <TranslatedText textKey="contact_title"/>
              <hr style={{ height:"5px"}} />
              
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="embed-responsive embed-responsive-16by9 google-maps" id="map">
              <iframe
                allowFullScreen
                frameBorder="0"
                title="Centro de Documentación Clínica Avanzada"
                className="embed-responsive-item"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1585.604945582641!2d-5.9802101!3d37.3612102!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x70784b65432acca!2sCentro+de+Documentaci%C3%B3n+Cl%C3%ADnica+Avanzada!5e0!3m2!1sen!2ses!4v1503409126736"
              />
            </div>
            <br />
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="contacto">
                <p>
                  <a href="https://www.clinbioinfosspa.es/">Clinical Bioinformatics Area</a>,{" "}
                  <a href="https://www.sspa.juntadeandalucia.es/fundacionprogresoysalud/">Fundación Progreso y Salud</a>.
                </p>
                <p>
                  Edificio C.D.C.A.. Hospital Universitario Virgen del Rocío <br />
                  Avenida Manuel Siurot s/n,
                <br />
                41013 Sevilla, España
                <br />
                <br />
                <br />
                Email:{" "}
                <a style={{ color: "#97B4CF" }} href="mailto:clinbioinfoarea@gmail.com">
                  clinbioinfoarea@gmail.com
                </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
