import React from 'react';
import html2pdf from 'html2pdf.js'

/*
=== Download Quality management ===
*/
const Download = () => {
    function downloadDocument(){
        const orderDoc = document.getElementById("unitdetails");
        var opt = {
            margin:       [0.50, 0.50, 0.50, 0.50],
            filename:     'ordername.pdf',
            image:        { type: 'jpeg', quality: 1 },
            html2canvas:  { scale: 1 },
            jsPDF:        { unit: 'in', format: 'letter', orientation: 'landscape' }
        };
        html2pdf().from(orderDoc).set(opt).save()
    }
    return (
        /*
        === Download Section ===
        */ 
        
            
        <button className="default-button" onClick={downloadDocument}>Print</button>
    )
}

export default Download
