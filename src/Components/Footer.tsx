import LogoFundacionBlanco from "../img/fps-blanco.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="copyright-text">
              <p><a href="https://github.com/onit4ku" target="_blank" rel="noreferrer"><span style={{ color: '#fff' }}>Copyright</span></a> ©   <a href="https://www.clinbioinfosspa.es/" target="_blank" rel="noreferrer">Clinical Bioinformatics Area</a> 2021 - 2022</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="social-icons">
              <ul>
                <li>
                  <a style={{ background: 'transparent' }} target="_blank" rel="noreferrer" href="https://www.clinbioinfosspa.es/">
                    <span><img src={LogoFundacionBlanco} alt="cba logo" /></span>
                  </a>
                </li>
                <li>
                  <a style={{ backgroundColor: '#1991DA' }} href="https://twitter.com/ClinicalBioinfo" target="_blank" rel="noreferrer"><i className="fa fa-twitter" /></a>
                </li>
                <li>
                  <a style={{ backgroundColor: '#FF0001' }} href="https://www.youtube.com/channel/UC7liwOO2B9NS0i0_YjBHZ6w" target="_blank" rel="noreferrer"><i className="fa fa-youtube" /></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>

  )
}
