import TranslatedText from "../i18n";

export default function Results() {
  return (
    <div className="page-section" id="results">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-heading">
              <br />
              <br />
              <br />
              <br />
              <hr style={{ height: "15px" }} />
              <TranslatedText textKey="results_text_title" />
              <hr style={{ height: "5px" }} />
            </div>
          </div>
        </div>

        <br />
        <br />

        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                <TranslatedText textKey="results_publications" />
                <br />
                <br />
                <br />
                <br />
                <br />
              </div>

              <p style={{ textAlign: "justify", fontSize: 18 }}>
                Loucera C, Perez-Florido J, Casimiro-Soriguer CS, Ortuño FM, Carmona R, Bostelmann G, Martínez-González LJ,
                Muñoyerro-Muñiz D, Villegas R, Rodriguez-Baño J, Romero-Gomez M, Lorusso N, Garcia-León J, Navarro-Marí JM,
                Camacho-Martinez P, Merino-Diaz L, Salazar A, Viñuela L, The Andalusian Covid-Sequencing Initiative, Lepe JA,
                Garcia F, Dopazo J.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/36146700/" target="_blank" rel="noopener noreferrer">
                  Assessing the Impact of SARS-CoV-2 Lineages and Mutations on Patient Survival.
                </a>{" "}
                Viruses. 2022 Aug 27;14(9):1893. doi: 10.3390/v14091893.
                <br />
                <br />
                Loucera C, Peña-Chilet M, Esteban-Medina M, Muñoyerro-Muñiz D, Villegas R, Lopez-Miranda J, Rodriguez-Baño J,
                Túnez I, Bouillon R, Dopazo J, Quesada Gomez JM.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/34862422/" target="_blank" rel="noopener noreferrer">
                  Real world evidence of calcifediol or vitamin D prescription and mortality rate of COVID-19 in a retrospective
                  cohort of hospitalized Andalusian patients.
                </a>{" "}
                Sci Rep. 2021 Dec 3;11(1):23380. doi: 10.1038/s41598-021-02701-5.
                <br />
                <br />
                Ortuño FM, Loucera C, Casimiro-Soriguer CS, Lepe JA, Camacho Martinez P, Merino Diaz L, de Salazar A, Chueca N,
                García F, Perez-Florido J, Dopazo J.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/34865008/" target="_blank" rel="noopener noreferrer">
                  Highly accurate whole-genome imputation of SARS-CoV-2 from partial or low-quality sequences.
                </a>{" "}
                Gigascience. 2021 Dec 2;10(12):giab078. doi: 10.1093/gigascience/giab078.
                <br />
                <br />
                Casimiro-Soriguer CS, Perez-Florido J, Fernandez-Rueda JL, Pedrosa-Corral I, Guillot-Sulay V, Lorusso N,
                Martinez-Gonzalez LJ, Navarro-Marí JM, Dopazo J, Sanbonmatsu-Gámez S.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/34063166/" target="_blank" rel="noopener noreferrer">
                  Phylogenetic Analysis of the 2020 West Nile Virus (WNV) Outbreak in Andalusia (Spain).
                </a>{" "}
                Viruses. 2021 May 5;13(5):836. doi: 10.3390/v13050836.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
