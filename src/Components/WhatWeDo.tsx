
import TranslatedText from "../i18n";

function WhatWeDo() {
    return (
        <div id="what-we-do" style={{ paddingTop: '21rem' }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="left-text">
                            <br />
                            <br />   <hr style={{ height: "15px" }} />
                            <TranslatedText textKey="whatwedo_title" />
                            <hr style={{ height: "5px" }} />
                            <br />
                            <TranslatedText textKey="whatwedo_txt" />
                            <br />
                            <br />
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default WhatWeDo;