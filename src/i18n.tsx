import React from 'react';
import { useRecoilState } from 'recoil';
import selectedLanguage from './i18nState';

const translations = {
  "en": {
    "menuLink-about": "About",
    "menuLink-monkey": "Monkeypox",
    "menuLink-wnv": "WNV",
    "menuLink-results": "Results",
    "menuLink-clinical": "Lineages",
    "menuLink-news": "News",
    "menuLink-contact": "Contact",
    "whatwedo_title":
      <h4>Antecedents</h4>
    ,
    "whatwedo_txt":
      <p style={{ textAlign: 'justify', fontSize: 18 }}>As response to a recommendation for the integration of genome sequencing in the SARS-CoV-2 surveillance published by the Public Health Commission of the Interterritorial council in <a href="https://www.mscbs.gob.es/profesionales/saludPublica/ccayes/alertasActual/nCov/documentos/Integracion_de_la_secuenciacion_genomica-en_la_vigilancia_del_SARS-CoV-2.pdf">22 January 2021</a>, a joint instruction was carried out, 1/2020 from the General Secretariat for Research, Development and Innovation in Health and the Management Directorate of the Andalusian Health Service, for the Management of samples in the approach to Personalized Medicine in COVID-19.<br /><br />A previous project funded by the Andalusian Health System (<a target="_blank" rel="noreferrer" href="https://clinbioinfosspa.es/projects/covseq/indexEng.html">Sequencing of the SARS-CoV-2 virus genome for the monitoring and management of the Covid-19 epidemic in Andalusia and the rapid generation of prognostic and response to treatment biomarkers</a>)  that included the 16 main tertiary hospitals in Andalusia, along with three research centers with genome sequencing facilities (IBIS, Genyo and CABIMER) and the Bioinformatics Area of the Progress and Health Foundation, set the ground for a rapid implementation of a regional-scale systematic sequencing of the virus. This project constitutes a remarkable example of translational research.</p>
    ,
    "about_text_title":
      <h4>The Whole Genome Sequencing Surveillance Circuit of Andalusia</h4>
    ,
    "about_text_1":
      <p style={{ textAlign: 'justify', fontSize: 18 }}>The operation of the circuit is as follows: samples are collected at the main tertiary hospitals from the eight Andalusian provinces and sent to the two reference sequencing hospitals, the San Cecilio Clinical Hospital for Eastern Andalusia, and Virgen del Rocio University Hospital for Western Andalusia (Figure 1 and Table 1). There, the samples are processed and the genetic material (viral RNA or DNA, depending in the virus) is extracted and subjected to Whole Genome Sequencing. The raw sequencing data are transferred to the <a target="_blank" rel="noreferrer" href="https://www.clinbioinfosspa.es/ ">Bioinformatics Area</a>, where they are processed to obtain whole genome sequence data. These data are indexed along with the meta-data provided by the Andalusian Epidemiological Surveillance System (SVEA), previously collected from the hospitals. The resulting findings (strain, lineage, VOIs and VOCs, etc.) are reported back to the sampling hospitals, for supporting clinical decision, and relevant epidemiological information is reported to the SVEA. <br /><br />
      Occasionally, reference hospitals for specific viruses make use of part of this genomic surveillance circuit, as has been the case of the Hospital Virgen de las Nieves (Granada) with the West Nile Virus (WNV).<br /></p>
    ,
    "about_text_Table1":
      <p style={{ textAlign: 'center', fontSize: 16 }}><b>Table 1.</b> <i>Selection of samples per week for sequencing at different Andalusian provinces in primary care (PC) or hospitalized (H) patients</i></p>
    ,
    "about_text_2":
      <p className="text-justify" >Unlike in many other initiatives that consider exclusively the primary use of genomic data, here especial attention has been paid to the secondary use of genomic data for clinical research. Andalusia has a unique resource, the <a target="_blank" rel="noreferrer" href="https://www.sspa.juntadeandalucia.es/servicioandaluzdesalud/profesionales/sistemas-de-informacion/base-poblacional-de-salud">Population Health Database (BPS, after Base Poblacional de Salud)</a>. All the clinical information on all the patients of the Andalusian Health System is stored there. The Bioinformatics Area submits all the viral genomes to BPS, where they are permanently stored, linked to the clinical information of the patients. <a target="_blank" rel="noreferrer" href="https://www.sspa.juntadeandalucia.es/servicioandaluzdesalud/sites/default/files/sincfiles/wsas-media-mediafile_sasdocumento/2019/BPS_Investigaci%C3%B3n.pdf">BPS has a procedure available to request data for secondary use in clinical research</a><br /><br />
      Finally, the Bioinformatic Area is responsible for the submission of the viral genomic sequences to <a target="_blank" rel="noreferrer" href="https://www.ebi.ac.uk/ena/browser/home">European nucleotide Archive (ENA)</a>  to make them available to the scientific community. </p>
    ,
    "about_text_fig1":
      <p style={{ textAlign: 'center', fontSize: 16 }}><b>Figure 1.</b> <i>Whole Genome Sequencing Surveillance Circuit of Andalusia for epidemiologic surveillance and clinical decision support</i></p>
    ,
    "about_text_fig2":
      <p style={{ textAlign: 'center', fontSize: 16 }}><b>Figure 2. </b> <i>Bioinformatic workflow for SARS-CoV-2 data</ i> </p>
    ,

    "about_text_title3":
    <h4>Viruses under genomic surveillance</h4>
    ,

    "WNV_text_title":
    <h4>West Nile Virus surveillance (WNV)</h4>
    ,
    "WNV_text_1":
      <p style={{ textAlign: 'justify', fontSize: 18 }}>West Nile virus (WNV), a member of the Flavivirus genus, is transmitted in an enzootic cycle involving birds as amplifying hosts and mosquitoes as vectors, which can ultimately be transmitted to mammals, considered dead-end hosts, causing disease out-breaks in horses and/or humans. Currently, the virus is considered a recurrent zoonosis with a wide geographic distribution. Phylogenetically, WNV is classified into eight lineages, although highly pathogenic strains belong mainly to lineages 1 and 2. There is evidence of WNV circulation in Europe since the 1950s, and the first recognized outbreak in humans occurred in 1962 in southern France. Lineage 1 was identified in the majority of outbreaks in horses and humans in Europe.
      <br /><br />In August 2020, five WNV human cases with unknown lymphocytic meningoencephalitis were first identified in the province of Seville (Andalusia) in two neighboring municipalities in front of the Guadalquivir marsh (Puebla del R??o and Coria del R??o). A month later, another group of human cases was identified in the province of C??diz. The whole outbreak, as reported by the Andalusian Epidemiological Surveillance System (SVEA), comprised 71 human cases of WNV meningoencephalitis (36 confirmed cases), with eight deaths, representing an 11.3% mortality rate. Five cases that were confirmed by PCR (four from Sevilla and one from C??diz) belonged to lineage 1. The raw genomic data obtained in the Hospital Virgen de las Nieves were sent to the Bioinformatics Area, where they were analyzed and the whole genome sequences were reported back to the hospital. Since then, the WNV is under surveillance within the circuit. </p>
    ,

    "Monkeypox_text_title":
    <h4>Monkeypox surveillance</h4>
    ,
    "Monkeypox_text_1":
      <p style={{ textAlign: 'justify', fontSize: 18 }}>Monkeypox (MPXV) is a viral zoonosis endemic in some West and Central African countries and with few cases outside Africa. In May 2022, an unexpectedly large MPXV clade B.1 outbreak affecting a considerable number of non-endemic countries was reported. After the first autochthonous cases were reported in the UK on 2022 May 13th and in Spain on May 17th, a rapid spread has been reported in more than 60 countries by the end of July. In this context, genomic monitoring of the circulating clade is important from the epidemiological point of view. In addition to the epidemiological relevance, that assigns clearly the Andalusian sequences to the circulating clade, whole-genome virus sequencing has a crucial role in monitoring polymorphisms, as well as in detecting gene losses based on possible intragenic frameshifts or premature stop codons that could appear locally and might be relevant as virulence or enhanced transmissibility determinants. 
      <br /><br />The Andalusian circuit of genomic surveillance was rapidly applied to characterize the Monkeypox outbreak in the South of Spain. 
      <br /><br />Whole genome sequencing was used to obtain the genomic profiles of samples collected across the south of Spain, representative of all the provinces of Andalusia. Phylogenetic analysis was used to study the relationship of the isolates and the available sequences of the 2022 outbreak.
      <br /><br />Whole genome sequences of monkeypox viruses from the different provinces that reported cases were obtained. In general, a low number of mutations were observed in the sequences reported, which were very similar to the reference of the 2022 outbreak, as expected from a DNA virus. <br /><br />The samples likely correspond to several introductions of the circulating monkeypox viruses from the last outbreak.</p>
    ,

    "clinicalInterest_text_title":
      <h4>Distribution of SARS-CoV-2 Lineages</h4>
    ,
    "clinicalInterest_text_charts":
      <p style={{ textAlign: "center", fontSize: 16 }}>
        <b>Charts.</b>{" "}<i>These charts refer to the samples sequenced as part of this study, which are selected according to their potential scientific interest. As such, the proportions do not reflect the relative natural prevalence in the general population.</i></p>
    ,
    "results_text_title":
      <h4>Results</h4>
    ,

    "results_publications":
    <h4 style={{ fontSize: 20 }}>Publications</h4>
  ,

    "results_text_conferences":
      <h4 style={{ fontSize: 20 }}>The Andalusian COVID-circuit in International Conferences</h4>
    ,
    "results_text_Downloads_poster":
      <h4 className="text-justify" >Here you can view or download our posters: </h4>
    ,
    "results_text_Downloads_1_poster":
      <p className="text-justify" ><a target="_blank" rel="noreferrer" href="https://www.clinbioinfosspa.es/files/posters/TheAndalusiancircuitforSARS-CoV-2%20WGS.pdf"><b>"The Andalusian circuit for SARS-CoV-2 whole genome sequencing"</b> </a></p>
    ,
    "results_text_Downloads_2_poster":
      <p className="text-justify" ><a target="_blank" rel="noreferrer" href="https://www.clinbioinfosspa.es/files/posters/Impact_of_SARS-CoV-2.pdf"><b>"Impact of SARS-CoV-2 lineages on the survival of hospitalized patients"</b> </a></p>
    ,
    "results_text_Downloads_3_poster":
    <p className="text-justify" ><a target="_blank" rel="noreferrer" href="https://www.clinbioinfosspa.es/files/posters/Circuito secuenciacion genomica del SARS-CoV-2 Andalucia.pdf"><b>"Circuito secuenciacion genomica del SARS-CoV-2 Andalucia"</b> </a></p>
    ,
    "results_text_Downloads_4_poster":
    <p className="text-justify" ><a target="_blank" rel="noreferrer" href="https://www.clinbioinfosspa.es/files/posters/poster_SEIMC.pdf"><b>"Comparaci??n entre los pipelines de Nanopore e Illumina para la secuenciaci??n masiva de SARS-CoV-2"</b> </a></p>
    ,
    "results_text_Downloads_2_top100":
      <p className="text-justify" >Our paper on <a href="https://www.nature.com/articles/s41598-021-02701-5.pdf"><b>Real World Evidence of vitamin D use and mortality rate of COVID-19</b></a> is among the top 100 most dowloaded articles of <a href="https://www.nature.com/collections/fhhdbhejca/?sap-outbound-id=0FAA2601713AAD4A5CA1D416B9988FC308869765&utm_source=hybris-campaign&utm_medium=email&utm_campaign=000_WANJ01_0000020639_HSCR_41598_CON1_GL_PHSS_TOP21_T100_Phys&utm_content=EN_internal_38720_20220321&mkt-key=42010A0550671EDA9BA9E11DF2291A52">Scientific Reports.</a></p>
    ,

    "results_text_1":
      <p className="text-justify" >This circuit is operating since February 2020, when it began sequencing whole genomes of SARS-CoV-2. Since the West Nile Fever outbreak in 2020 summer this virus is also monitored. And the recent May 2022 Monkeypox outbreak included also this virus in the surveillance circuit.</p>
    ,
    "results_text_2":
      <p className="text-justify" >The Bioinformatics Area reports back to the San Cecilio and the Virgen del Rocio reference hospitals the lineages of the virus sequenced, if these are VOIs or VOCs, as well as any new mutations of concern.<br /><br />An advanced tool developed by the area, which is freely available in the{" "}<a target="_blank" rel="noreferrer" href="https://github.com/babelomics/impuSARS">impuSARS github repository</a>, is used to recover low quality sequences and we can impute lineage with accuracy for more than the 95% of the samples sequenced. See more details in the <a target="_blank" rel="noreferrer" href="https://pubmed.ncbi.nlm.nih.gov/34865008/">publication</a>.<br /><br /></p>
    ,

    "results_text_3":
      <p className="text-justify text-center" >
        <a target="_blank" rel="noreferrer" href="http://nextstrain.clinbioinfosspa.es/SARS-COV-2-all?c=lineage">A local instance of NextStrain</a>{" "}represent all the samples currently sequenced:<br /></p>
    ,
    "results_text_relatedWorks":
      <h4 style={{ fontSize: 20 }}>Another related works</h4>
    ,
    "news_title":
      <h4>News</h4>
    ,
    "news-heading":
      <h4 className="news-heading">
        Andalusia leads the genomic sequencing of the coronavirus at the national level
      </h4>
    ,
    "news-text":
      <p>Informative video about the work carried out in the Andalusian Public Health System to sequence the coronavirus genome and better understand the disease. Made by 7TV in collaboration with the Ministry of Health and Families, the Progreso y Salud Foundation and Novartis.<br />
        <br />
        <br />
      </p>
    ,
    "contact_title":
      <h4>Contact</h4>
    ,
  },
  "es": {
    "menuLink-about": "Acerca de",
    "menuLink-monkey": "Monkeypox",
    "menuLink-wnv": "WNV",
    "menuLink-results": "Resultados",
    "menuLink-clinical": "Linajes",
    "menuLink-news": "Noticias",
    "menuLink-contact": "Contacto",
    "whatwedo_title":
      <h4>Circuito de vigilancia por secuenciaci??n gen??mica de Andaluc??a</h4>
    ,
    "whatwedo_txt":
      <p style={{ textAlign: 'justify', fontSize: 18 }}>Como respuesta a una recomendaci??n para la integraci??n de la secuenciaci??n del genoma en la vigilancia del SARS-CoV-2 publicada por la Comisi??n de Salud P??blica del Consejo Interterritorial en <a target="_blank" rel="noreferrer" href="https://www.mscbs.gob.es/profesionales/saludPublica/ccayes/alertasActual/nCov/documentos/Integracion_de_la_secuenciacion_genomica-en_la_vigilancia_del_SARS-CoV-2.pdf"> 22 de enero de 2021 </a>, se realiz?? una instrucci??n conjunta, 1/2020 desde la Secretar??a General de Investigaci??n, Desarrollo e Innovaci??n en Salud y la Direcci??n de Gesti??n del Servicio Andaluz de Salud, para la Gesti??n de muestras en el abordaje de Medicina Personalizada en COVID-19. 
      <br /> <br /> Un proyecto previo financiado por el Sistema Andaluz de Salud (<a target="_blank" rel="noreferrer" href="https://clinbioinfosspa.es/projects/covseq/indexEng.html"> Secuenciaci??n del genoma del virus SARS-CoV-2 para el seguimiento y manejo de la epidemia de Covid-19 en Andaluc??a y la r??pida generaci??n de pron??sticos y respuestas de biomarcadores de tratamiento </a>) que inclu??a los 16 principales hospitales terciarios de Andaluc??a, junto con tres centros de investigaci??n con secuenciaci??n del genoma (IBIS, Genyo y CABIMER) y el ??rea de Bioinform??tica de la Fundaci??n Progreso y Salud, sentaron las bases para una r??pida implementaci??n de una secuenciaci??n sistem??tica del virus a escala regional. Este proyecto constituye un ejemplo notable de investigaci??n traslacional. </p>
    ,
    "about_text_title":
      <h4>Circuito de secuenciaci??n del genoma completo del SARS-CoV-2</h4>
    ,
    "about_text_1":
      <p style={{ textAlign: 'justify', fontSize: 18 }}>El funcionamiento del circuito es el siguiente: las muestras se recogen en los principales hospitales terciarios de las ocho provincias andaluzas y se env??an a los dos hospitales de secuenciaci??n de referencia: el Hospital Cl??nico San Cecilio para Andaluc??a Oriental, y el Hospital Universitario Virgen del Roc??o para Andaluc??a Occidental (Figura 1 y Tabla 1). All?? se procesan las muestras y se extrae el material gen??tico (ARN o ADN viral, seg??n el virus) y se realiza la secuenciaci??n del genoma completo. Los datos brutos de la secuenciaci??n se transfieren al <a target="_blank" rel="noreferrer" href="https://www.clinbioinfosspa.es/"> ??rea de Bioinform??tica </a>, donde se procesan para obtener los datos de la secuencia del genoma completo. Estos datos se indexan junto con los metadatos proporcionados por el Sistema de Vigilancia Epidemiol??gica de Andaluc??a (SVEA), previamente recogidos en los hospitales. Los hallazgos resultantes (cepa, linaje, VOIs y VOCs, etc.) son reportados a los hospitales de muestreo, para apoyar la decisi??n cl??nica, y la informaci??n epidemiol??gica relevante es reportada SVEA. 
      <br /><br />En ocasiones, los hospitales de referencia para determinados virus hacen uso de parte de este circuito de vigilancia gen??mica, como ha sido el caso del Hospital Virgen de las Nieves (Granada) con el Virus de la Fiebre del Nilo. </p>
    ,
    "about_text_Table1":
      <p style={{ textAlign: 'center', fontSize: 16 }}><b>Tabla 1. </b> <i> Hospitales participantes en el circuito. </i> </p>
    ,
    "about_text_2":
      <p className="text-justify" >A diferencia de muchas otras iniciativas que consideran exclusivamente el uso primario de los datos gen??micos, aqu?? se ha prestado especial atenci??n al uso secundario de los datos gen??micos para la investigaci??n cl??nica. Andaluc??a cuenta con un recurso ??nico, la <a target="_blank" rel="noreferrer" href="https://www.sspa.juntadeandalucia.es/servicioandaluzdesalud/profesionales/sistemas-de-informacion/base-poblacional-de-salud"> Base Poblacional de Salud (BPS)</a>. 
      <br /> <br />En ella se almacena toda la informaci??n cl??nica de todos los pacientes del Sistema Andaluz de Salud. El ??rea de Bioinform??tica remite todos los genomas virales a la BPS, donde se almacenan permanentemente, vinculados a la informaci??n cl??nica de los pacientes. BPS dispone de un procedimiento para solicitar los datos para su uso secundario en la <a target="_blank" rel="noreferrer" href="https://www.sspa.juntadeandalucia.es/servicioandaluzdesalud/sites/default/files/sincfiles/wsas-media-mediafile_sasdocumento/2019/BPS_Investigaci%C3%B3n.pdf "> investigaci??n cl??nica </a>. Por ??ltimo, el ??rea de Bioinform??tica es responsable del env??o de las secuencias gen??micas virales al European Nucleotide Archive (ENA)1 para ponerlas a disposici??n de la comunidad cient??fica.</p>
    ,
    "about_text_fig1":
      <p style={{ textAlign: 'center', fontSize: 16 }}><b>Figura 1. </b> <i> Circuito de Vigilancia por Secuenciaci??n del Genoma Completo de Andaluc??a para la vigilancia epidemiol??gica y el apoyo a la decisi??n cl??nica </ i> </p>
    ,
    "about_text_fig2":
      <p style={{ textAlign: 'center', fontSize: 16 }}><b>Figura 2. </b> <i>Flujo de trabajo bioinform??tico para datos de SARS-CoV-2</ i> </p>
    ,

    "about_text_title3":
    <h4>Virus incluidos en la vigilancia gen??mica</h4>
    ,

    "WNV_text_title":
      <h4>Vigilancia del Virus de la Fiebre del Nilo (VFN)</h4>
    ,
    "WNV_text_1":
      <p style={{ textAlign: 'justify', fontSize: 18 }}>El virus de la Fiebre del Nilo (VFN), miembro del g??nero Flavivirus, se transmite en un ciclo enzo??tico en el que intervienen las aves como hu??spedes amplificadores y los mosquitos como vectores, que en ??ltima instancia pueden transmitirse a los mam??feros, considerados hu??spedes finales, causando brotes de la enfermedad en caballos y/o seres humanos. Actualmente, el virus se considera una zoonosis recurrente con una amplia distribuci??n geogr??fica. Filogen??ticamente, el VFN se clasifica en ocho linajes, aunque las cepas altamente pat??genas pertenecen principalmente a los linajes 1 y 2. Hay pruebas de la circulaci??n del VFN en Europa desde la d??cada de 1950, y el primer brote reconocido en humanos se produjo en 1962 en el sur de Francia. El linaje 1 se identific?? en la mayor??a de los brotes en caballos y humanos en Europa.
      <br /><br />En agosto de 2020, se identificaron por primera vez cinco casos humanos de VFN con meningoencefalitis linfoc??tica idiop??tica en la provincia de Sevilla (Andaluc??a) en dos municipios vecinos frente a la marisma del Guadalquivir (Puebla del R??o y Coria del R??o). Un mes despu??s, se identific?? otro grupo de casos humanos en la provincia de C??diz. Todo el brote, seg??n inform?? el Sistema de Vigilancia Epidemiol??gica de Andaluc??a (SVEA), constaba de 71 casos humanos de meningoencefalitis por VFN (36 casos confirmados), con ocho muertes, lo que representa una tasa de mortalidad del 11,3%. Cinco casos confirmados por PCR (cuatro de Sevilla y uno de C??diz) pertenec??an al linaje 1. Los datos gen??micos brutos obtenidos mediante secuenciaci??n en el Hospital Virgen de las Nieves se enviaron al ??rea de Bioinform??tica, donde se analizaron y se comunicaron las secuencias del genoma completo al hospital. Desde entonces, el VFN est?? bajo vigilancia dentro del circuito.</p>
    ,

    "Monkeypox_text_title":
    <h4>Vigilancia de la viruela del mono</h4>
    ,
    "Monkeypox_text_1":
      <p style={{ textAlign: 'justify', fontSize: 18 }}>La viruela del mono (MPXV) es una zoonosis viral end??mica en algunos pa??ses de ??frica Occidental y Central, con pocos casos fuera de ??frica. En mayo de 2022, se notific?? un brote inesperadamente grande de MPXV del clado B.1 que afect?? a un n??mero considerable de pa??ses no end??micos. Poco despu??s de que se notificaran los primeros casos aut??ctonos en el Reino Unido el 13 de mayo de 2022 y en Espa??a el 17 de mayo, ya se hab??a notificado una r??pida propagaci??n en m??s de 60 pa??ses a finales de julio. En este contexto, el seguimiento gen??mico del clado circulante es importante desde el punto de vista epidemiol??gico. Adem??s de la relevancia epidemiol??gica, que asigna claramente las secuencias andaluzas al clado circulante, la secuenciaci??n del genoma completo del virus tiene un papel crucial en la monitorizaci??n de polimorfismos, as?? como en la detecci??n de p??rdidas g??nicas basadas en posibles frameshifts intrag??nicos o codones de parada prematuros que podr??an aparecer localmente y ser relevantes como determinantes de virulencia o de mejora de la transmisibilidad. 
      <br /><br />El circuito andaluz de vigilancia gen??mica se us?? r??pidamente para caracterizar el brote de viruela del mono en el sur de Espa??a. 
      <br /><br />Se utiliz?? la secuenciaci??n del genoma completo para obtener los perfiles gen??micos de muestras recogidas en todo el sur de Espa??a, representativas de todas las provincias de Andaluc??a. Se utiliz?? el an??lisis filogen??tico para estudiar la relaci??n de los aislados y las secuencias disponibles del brote de 2022. 
      <br /><br />Se obtuvo la secuencia del genoma completo de los virus de la viruela del mono de las diferentes provincias que notificaron casos. En general, se observ?? un bajo n??mero de mutaciones en las secuencias estudiadas, que eran muy similares a la referencia del brote de 2022, como se espera de un virus de ADN. 
      <br /><br />Es probable que las muestras correspondan a varias introducciones de los virus de la viruela del mono circulantes desde el ??ltimo brote.</p>
    ,

    "clinicalInterest_text_title":
      <h4>Distribuci??n de linajes de SARS-CoV-2</h4>
    ,
    "clinicalInterest_text_charts":
      <p style={{ textAlign: "center", fontSize: 16 }}><b>Gr??ficos. </b> {""}<i>Estos gr??ficos se refieren a las muestras secuenciadas como parte de este estudio, que se seleccionan de acuerdo con su potencial inter??s cient??fico. Como tal, las proporciones no reflejan la prevalencia natural relativa en la poblaci??n general.</i></p>
    ,
    "results_text_title":
      <h4>Resultados</h4>
    ,
    "results_text_Downloads_poster":
      <h4 className="text-justify" >Aqu?? puedes consultar o descargar nuestros p??ster:</h4>
    ,
    "results_text_Downloads_1_poster":
      <p className="text-justify" ><a target="_blank" rel="noreferrer" href="https://www.clinbioinfosspa.es/files/posters/TheAndalusiancircuitforSARS-CoV-2%20WGS.pdf"><b>"The Andalusian circuit for SARS-CoV-2 whole genome sequencing"</b> </a></p>
    ,
    "results_text_Downloads_2_poster":
      <p className="text-justify" ><a target="_blank" rel="noreferrer" href="https://www.clinbioinfosspa.es/files/posters/Impact_of_SARS-CoV-2.pdf"><b>"Impact of SARS-CoV-2 lineages on the survival of hospitalized patients"</b> </a></p>
    ,
    "results_text_Downloads_3_poster":
    <p className="text-justify" ><a target="_blank" rel="noreferrer" href="https://www.clinbioinfosspa.es/files/posters/Circuito secuenciacion genomica del SARS-CoV-2 Andalucia.pdf"><b>"Circuito secuenciacion genomica del SARS-CoV-2 Andalucia"</b> </a></p>
    ,
    "results_text_Downloads_4_poster":
    <p className="text-justify" ><a target="_blank" rel="noreferrer" href="https://www.clinbioinfosspa.es/files/posters/poster_SEIMC.pdf"><b>"Comparaci??n entre los pipelines de Nanopore e Illumina para la secuenciaci??n masiva de SARS-CoV-2"</b> </a></p>
    ,
    "results_text_Downloads_2_top100":
      <p className="text-justify" >Nuestro art??culo <a href="https://www.nature.com/articles/s41598-021-02701-5.pdf"><b>Real World Evidence of vitamin D use and mortality rate of COVID-19</b></a> est?? entre los 100 art??culos m??s descargados de <a target="_blank" rel="noreferrer" href="https://www.nature.com/collections/fhhdbhejca/?sap-outbound-id=0FAA2601713AAD4A5CA1D416B9988FC308869765&utm_source=hybris-campaign&utm_medium=email&utm_campaign=000_WANJ01_0000020639_HSCR_41598_CON1_GL_PHSS_TOP21_T100_Phys&utm_content=EN_internal_38720_20220321&mkt-key=42010A0550671EDA9BA9E11DF2291A52">Scientific Reports.</a></p>
    ,

    "results_publications":
    <h4 style={{ fontSize: 20 }}>Publicaciones</h4>
  ,

    "results_text_conferences":
      <h4 style={{ fontSize: 20 }}>El circuito COVID de Andaluc??a en Congresos Internacionales</h4>
    ,
    "results_text_1":
      <p className="text-justify" >Este circuito est?? en funcionamiento desde febrero de 2020, cuando comenz?? a secuenciar genomas completos del SARS-CoV-2. Desde el brote de Fiebre del Nilo del verano de 2020 tambi??n se vigila este virus. Y desde el reciente brote de viruela del mono de mayo de 2022 tambi??n se incluy?? en este circuito de vigilancia a este virus.</p>
    ,
    "results_text_2":
      <p className="text-justify" >El ??rea de Bioinform??tica informa a los hospitales de referencia San Cecilio y Virgen del Roc??o. linajes del virus secuenciado, si se trata de VOI o VOC, as?? como cualquier nueva mutaci??n de inter??s. 
      <br /><br />Una herramienta avanzada desarrollada por el ??rea, que est?? disponible gratuitamente en el {""}<a href="https://github.com/babelomics/impuSARS"> repositorio de github impuSARS </a>, se utiliza para recuperar baja calidad secuencias y podemos imputar el linaje con precisi??n para m??s del 95% de las muestras secuenciadas. Ver m??s detalles en la <a href="https://pubmed.ncbi.nlm.nih.gov/34865008/"> publicaci??n </a>.
      <br /><br /></p>
    ,
    "results_text_3":
      <p className="text-justify text-center" >
        <a target="_blank" rel="noreferrer" href="http://nextstrain.clinbioinfosspa.es/SARS-COV-2-all?c=lineage"> Una instancia local de NextStrain </a> {""}representa las muestras secuenciadas actualmente:<br /></p>
    ,
    "results_text_relatedWorks":
      <h4 style={{ fontSize: 20 }}>Otros trabajos relacionados</h4>
    ,
    "news_title":
      <h4>Art??culos de prensa</h4>
    ,
    "news-heading":
      <h4 className="news-heading">
        Andaluc??a lidera la secuenciaci??n gen??mica del coronavirus a nivel nacional
      </h4>
    ,
    "news-text":
      <p>Video divulgativo sobre el trabajo que se realiza en el Sistema Sanitario P??blico de Andaluc??a para secuenciar el genoma del coronavirus y conocer mejor la enfermedad.
        Realizado por 7TV en colaboraci??n con la Consejer??a de Salud y Familias, la Fundaci??n Progreso y Salud y Novartis.
        <br /><br /><br /></p>
    , "contact_title":
      <h4>Contacto </h4>
    ,
  }
};

interface IProps {
  textKey: string;
}

function TranslatedText(props: IProps) {
  const { textKey } = props;
  const [language] = useRecoilState(selectedLanguage);
  // const [language, setLanguage] = useRecoilState(selectedLanguage);
  const languageTranslations = translations[language];
  return languageTranslations[textKey];
}

export default TranslatedText;
