import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { useReactToPrint } from 'react-to-print';
import numberToText from "number-to-text";
import 'number-to-text/converters/en-us';

function ChequeCreate() {
    const contentToPrint = useRef(null);

    // const handlePrint = useReactToPrint({
    //     documentTitle: "Print This Document",
    //     onBeforePrint: () => console.log("before printing..."),
    //     onAfterPrint: () => console.log("after printing..."),
    //     removeAfterPrint: true,
    // });

    const handlePrint = useReactToPrint({
        content: () => contentToPrint.current,
    });



    function convertDecimalToText(number: any) {
        if (number) {
            const [wholePart, decimalPart] = number.toString().split(".");
            let text = numberToText.convertToText(parseInt(wholePart));
            if (parseInt(decimalPart) > 0) {
                const decimalText = numberToText.convertToText(parseInt(decimalPart));
                text += ` Rupees and ${decimalText} Cents`;
            }
            text += ` Only`;
            return text;
        }
        return "";
    }

    const datePrint = (data: any) => {
        return moment(data).format('DDMMYYYY');
    };

    return (
        <>
            <div>
                {/* <div className="d-flex justify-content-between align-items-center mb-3">
                       <h4 className="mb-sm-0 font-size-18">Cheque Print</h4>
                    <Link className="btn-close" to="/labaccount/cheque"></Link>
                </div>
                <div className="d-flex justify-content-end pb-3">
                    <button type="button" className="btn btn-danger me-2 mb-2 mb-sm-0" onClick={handlePrint}>Print</button>
                </div>
                <div className="card" style={{ minHeight: "98vh", paddingBottom: "1%" }}>
                    <div ref={contentToPrint} className="row m-4">
                        <div className="col-sm-12">
                            <div className="body">
                                <div className="d-flex justify-content-end" style={{ marginRight: 108, letterSpacing: 15 }}>
                                    {datePrint(new Date())}
                                </div>
                                <br />
                                <div className="d-flex" style={{ marginLeft: 20, marginTop: 8 }}>
                                    {"Kelaxa"}
                                </div>
                                <br />
                                <div className="row d-flex mx-4" style={{ marginTop: -5 }}>
                                    <div className="col-7">{convertDecimalToText(50000)}</div>
                                    <div className="col-4" style={{ marginTop: 20, marginLeft: -10 }}>{50000}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}


                <div className="d-flex justify-content-end pb-3">
                    <button type="button" className="btn btn-danger me-2 mb-2 mb-sm-0" onClick={handlePrint}>Print</button>
                </div>
                <div ref={contentToPrint} className="row m-4  " >
                        <div className="col-sm-12">
                            <div className="body" style={{ marginLeft: 70, marginTop: 8 }}>
                                <div className='d-flex justify-content-end  ' style={{ marginRight: -14, marginTop: -2, letterSpacing: 16 }}>
                                    {datePrint(new Date)}
                                </div>

                                <br />
                                <div className='d-flex ' style={{ marginLeft: 60, marginTop: 8 }}>
                                    Kelaxa
                                </div >
                                <br />
                                <div className="row d-flex mx-4" style={{ marginTop: -5 }}>
                                    <div className="col-6" style={{ marginLeft: 50, lineHeight: "27px" }}>{convertDecimalToText(50000)}</div>
                                    <div className="col-3" style={{ marginTop: 23, marginLeft: 80 }}>{50000}</div>
                                </div>
                                {/* <div className="col-4 mt-3" > {new Date().toLocaleDateString()}  -  {new Date().toLocaleTimeString()}</div> */}
                            </div>
                        </div>
                    </div>
            </div>
        </>
    );
}

export default ChequeCreate;
