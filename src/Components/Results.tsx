import TranslatedText from "../i18n";

import circuitImg2 from "../img/figuras.pptx.svg";
import phylogeny from "../img/phylogeny.png";
import geography from "../img/geography.png";
import imgDownloads from "../img/imgDownloads.png";
import imgViBioM2022 from "../img/ViBioM2022banner.jpg";
import seimc2022 from "../img/seimc2022.png";
import poster from "../img/poster.png";
import poster2 from "../img/poster2.png";
import poster3 from "../img/poster3.png";
import poster4 from "../img/poster4.png";

export default function Results() {
  return (
    <div className="page-section" id="results">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-heading">
              <br /><br /><br /><br />
              <hr style={{ height: "15px" }} />
              <TranslatedText textKey="results_text_title" />
              <hr style={{ height: "5px" }} />
            </div>
          </div>
        </div>

        <br /><br />

        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br /><br /><br /><br />
              <TranslatedText textKey="results_text_1" />
              <br />
              <img src={circuitImg2} className="img-responsive center-block" alt="sequencing circuit" />
              <br /><br />
              <TranslatedText textKey="results_text_2" />
            </div>

            <div className="col-md-12">
              <br /><br /><br />
              <TranslatedText textKey="results_text_3" />
            </div>
          </div>
          <br />
          <br />

          <div className="row">
            <div className="col-md-6">
              <div className="embed-responsive embed-responsive-16by9 google-maps">
                {/* <iframe
                  allowFullScreen
                  frameBorder="0"
                  title="andalucia sars-cov tree"
                  className="embed-responsive-item"
          
                  src="http://nextstrain.clinbioinfosspa.es/SARS-COV-2-all?c=lineage&d=tree&onlyPanels=TRUE&sidebar=closed" ></iframe> */}
                <a
                  target="_blank"
                  rel="noreferrer noopener"
                  href="http://nextstrain.clinbioinfosspa.es/SARS-COV-2-all?c=lineage&d=tree&onlyPanels=TRUE&sidebar=closed"
                >
                  {" "}
                  <img src={phylogeny} className="img-responsive center-block" alt="phylogeny" />
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="embed-responsive embed-responsive-16by9 google-maps">
                {/* <iframe
                  allowFullScreen
                  frameBorder="0"
                  title="andalucia sars-cov map"
                  className="embed-responsive-item"
               
                  src="http://nextstrain.clinbioinfosspa.es/SARS-COV-2-all?c=lineage&d=map&onlyPanels=TRUE&sidebar=closed" ></iframe> */}
                <a
                  target="_blank"
                  rel="noreferrer noopener"
                  href="http://nextstrain.clinbioinfosspa.es/SARS-COV-2-all?c=lineage&d=map&onlyPanels=TRUE&sidebar=closed"
                >
                  <img src={geography} className="img-responsive center-block" alt="phylogeny" />
                </a>
              </div>
            </div>

            <div className="row">
            <div className="col-md-12">
            <div className="section-heading">
                    <TranslatedText textKey="results_publications" />
                    <br /><br /><br />
                  </div>

          <p style={{ textAlign: 'justify', fontSize: 18 }}>

          Loucera C, Perez-Florido J, Casimiro-Soriguer CS, Ortuño FM, Carmona R, Bostelmann G, Martínez-González LJ, Muñoyerro-Muñiz D, Villegas R, Rodriguez-Baño J, Romero-Gomez M, Lorusso N, Garcia-León J, Navarro-Marí JM, Camacho-Martinez P, Merino-Diaz L, Salazar A, Viñuela L, The Andalusian Covid-Sequencing Initiative, Lepe JA, Garcia F, Dopazo J. <a href="https://pubmed.ncbi.nlm.nih.gov/36146700/" target="_blank" rel="noopener noreferrer">Assessing the Impact of SARS-CoV-2 Lineages and Mutations on Patient Survival.</a>  Viruses. 2022 Aug 27;14(9):1893. doi: 10.3390/v14091893. 
          <br /><br />Loucera C, Peña-Chilet M, Esteban-Medina M, Muñoyerro-Muñiz D, Villegas R, Lopez-Miranda J, Rodriguez-Baño J, Túnez I, Bouillon R, Dopazo J, Quesada Gomez JM. <a href="https://pubmed.ncbi.nlm.nih.gov/34862422/" target="_blank" rel="noopener noreferrer">Real world evidence of calcifediol or vitamin D prescription and mortality rate of COVID-19 in a retrospective cohort of hospitalized Andalusian patients.</a> Sci Rep. 2021 Dec 3;11(1):23380. doi: 10.1038/s41598-021-02701-5.
<br /><br />Ortuño FM, Loucera C, Casimiro-Soriguer CS, Lepe JA, Camacho Martinez P, Merino Diaz L, de Salazar A, Chueca N, García F, Perez-Florido J, Dopazo J. <a href="https://pubmed.ncbi.nlm.nih.gov/34865008/" target="_blank" rel="noopener noreferrer">Highly accurate whole-genome imputation of SARS-CoV-2 from partial or low-quality sequences.</a> Gigascience. 2021 Dec 2;10(12):giab078. doi: 10.1093/gigascience/giab078.
<br /><br />Casimiro-Soriguer CS, Perez-Florido J, Fernandez-Rueda JL, Pedrosa-Corral I, Guillot-Sulay V, Lorusso N, Martinez-Gonzalez LJ, Navarro-Marí JM, Dopazo J, Sanbonmatsu-Gámez S. <a href="https://pubmed.ncbi.nlm.nih.gov/34063166/" target="_blank" rel="noopener noreferrer">Phylogenetic Analysis of the 2020 West Nile Virus (WNV) Outbreak in Andalusia (Spain).</a> Viruses. 2021 May 5;13(5):836. doi: 10.3390/v13050836.
</p>
          </div>
            </div>
          </div>

          <div className="page-section" id="conferences">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="section-heading">
                    <TranslatedText textKey="results_text_conferences" />
                    <br /><br /><br />
                  </div>
                  <br /><br />
                  <a target="_blank" rel="noreferrer" href="https://evbc.uni-jena.de/events/vibiom2022/"><img src={imgViBioM2022} className="img-responsive center-block" alt="vibiom 2022 banner" /></a>
                  <br /><br /><br /><br />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="section-heading">
                  <b><TranslatedText textKey="results_text_Downloads_poster" /></b>
                      <br />
                      <br /><br /><br /><br />
                    </div>
                </div>

                <div className="col-md-6">
                  <TranslatedText textKey="results_text_Downloads_1_poster" />
                  <br /> <br />
                  <a target="_blank" rel="noreferrer" href="https://www.clinbioinfosspa.es/files/posters/TheAndalusiancircuitforSARS-CoV-2%20WGS.pdf"><img src={poster} className="img-responsive center-block" alt="andalusian circuit poster" /></a>
                </div>

                <div className="col-md-6">
                  <TranslatedText textKey="results_text_Downloads_2_poster" />
                  <br /> <br />
                  <a target="_blank" rel="noreferrer" href="https://www.clinbioinfosspa.es/files/posters/Impact_of_SARS-CoV-2.pdf"><img src={poster2} className="img-responsive center-block" alt="Impact of SARS-CoV-2 poster" /></a>

                </div>
                <div className="col-md-12">

                <br /><br />
                <br /><br />
                  <a target="_blank" rel="noreferrer" href="https://seimc2022.org/"><img src={seimc2022} className="img-responsive center-block" alt="seimc 2022 banner" /></a>
                <br /><br /><br /><br />
                </div>

                <div className="col-md-12">
                  <div className="section-heading">
                  <b><TranslatedText textKey="results_text_Downloads_poster" /></b>
                      <br />
                      <br /><br />
                    </div>
                </div>

                <div className="col-md-6">
                <br /> <br />

                  <TranslatedText textKey="results_text_Downloads_3_poster" />
                  <br /> <br />
                  <a target="_blank" rel="noreferrer" href="https://www.clinbioinfosspa.es/files/posters/Circuito secuenciacion genomica del SARS-CoV-2 Andalucia.pdf"><img src={poster3} className="img-responsive center-block" alt="andalusian circuit poster" /></a>
                </div>

                <div className="col-md-6">
                <br /> <br />

                  <TranslatedText textKey="results_text_Downloads_4_poster" />
                  <br /> <br />
                  <a target="_blank" rel="noreferrer" href="https://www.clinbioinfosspa.es/files/posters/poster_SEIMC.pdf"><img src={poster4} className="img-responsive center-block" alt="Impact of SARS-CoV-2 poster" /></a>
                </div>



              </div>
            </div>

          </div>

          <div className="page-section" id="RelatedWorks">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="section-heading">
                    <TranslatedText textKey="results_text_relatedWorks" />
                    <br />
                    <br /><br /><br /><br />
                  </div>

                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <TranslatedText textKey="results_text_Downloads_2_top100" />
                  <br />
                  <a target="_blank" rel="noreferrer" href="https://www.nature.com/collections/fhhdbhejca/?sap-outbound-id=0FAA2601713AAD4A5CA1D416B9988FC308869765&utm_source=hybris-campaign&utm_medium=email&utm_campaign=000_WANJ01_0000020639_HSCR_41598_CON1_GL_PHSS_TOP21_T100_Phys&utm_content=EN_internal_38720_20220321&mkt-key=42010A0550671EDA9BA9E11DF2291A52"><img src={imgDownloads} className="img-responsive center-block" alt="sequencing circuit" /></a>
                </div>
                <div className="col-md-6">
                  <h2><a href="https://academic.oup.com/gigascience/article/10/12/giab078/6448505">Highly accurate whole-genome imputation of SARS-CoV-2 from partial or low-quality sequences</a></h2>
                  <p className="text-justify">Francisco M Ortuño, Carlos Loucera, Carlos S Casimiro-Soriguer, Jose A Lepe, Pedro Camacho Martinez, Laura Merino Diaz, Adolfo de Salazar, Natalia Chueca, Federico García, Javier Perez-Florido, Joaquin Dopazo</p>
                  <p> <a href="https://academic.oup.com/gigascience/article-pdf/10/12/giab078/41474609/giab078.pdf"><img width="19" height="24" src="https://oup.silverchair-cdn.com/UI/app/svg/pdf.svg" alt="pdf icon" /> </a> </p>
                  <br />
                  <hr />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
