/*
 * Will be used for reading a CSV File and convert it to JSON
 * Check Documentation: https://www.npmjs.com/package/papaparse
 */

import Papa from "papaparse";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import toast from "react-hot-toast";

// import Components
import MainHeader from "../components/main-header";
import UploadInfoBox from "../components/upload-info-box";
import RedirectInfoBox from "../components/redirect-info-box";
import ConvertedRedirects from "../components/converted-redirects";

// import dynamic components
const CopyButton = dynamic(
  () =>
    import("../components/copy-to-clipboard").then(
      (mod) => mod.CopyToClipboard
    ),
  { ssr: false }
);

export default function Home() {
  // State to store parsed data
  const [parsedCsvData, setParsedCsvData] = useState([]);

  //State to store table Column name
  const [csvRows, setCsvRows] = useState([]);

  //State to store the values
  const [csvValues, setCsvValues] = useState([]);

  // State to store the actual data for the redirects [301, 302 307, 308]
  const [redirects, setRedirects] = useState([]);

  // State to store the actual data for Statuscode [410]
  const [statusDeleted, setStatusDeleted] = useState([]);

  const [finalJson, setFinalJson] = useState(null);

  useEffect(() => {
    if (parsedCsvData.length > 0) {
      toast.success("CSV File has been uploaded!");
    }
  }, [parsedCsvData]);

  useEffect(() => {
    setFinalJson(generateJsonOutput(redirects));
  }, [redirects, finalJson]);

  function generateJsonOutput(redirects) {
    const jsonOutput = [];
    jsonOutput.push(
      redirects.map((d) => {
        return { source: `/${d[1]}`, destination: `${d[3]}`, permanent: true };
      })
    );
    let str = JSON.stringify(jsonOutput[0], null, "\t");
    let strWithOutQuotes = str.replace(/"([^"]+)":/g, "$1:");
    let json = `async redirects() { 
        return ${strWithOutQuotes};
      },`;
    return json;
  }

  const changeHandler = (event) => {
    // Passing file data (event.target.files[0]) to parse using Papa.parse
    Papa.parse(event.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        const rowsArray = [];
        const valuesArray = [];

        // Iterating data to get column name and their values
        results.data.map((d) => {
          rowsArray.push(Object.keys(d));
          valuesArray.push(Object.values(d));
        });

        const redirects = [];
        const statusDeleted = [];

        valuesArray.map((d) => {
          if (d[4] === "301") {
            redirects.push(d);
          }

          if (d[4] === "410") {
            statusDeleted.push(d);
          }
        });

        // Parsed Data Response in array format
        setParsedCsvData(results.data);

        // Filtered Column Names
        setCsvRows(rowsArray[0]);

        // Filtered Values
        setCsvValues(valuesArray);

        // Set filtered Redirects
        setRedirects(redirects);

        // Set filtered Status Deleted
        setStatusDeleted(statusDeleted);
      },
    });
  };

  return (
    <div>
      <MainHeader ChangeHandler={changeHandler} />
      <UploadInfoBox CsvRows={csvRows} CsvValues={csvValues} />
      <RedirectInfoBox
        CsvRows={csvRows}
        Redirects={redirects}
        StatusDeleted={statusDeleted}
      />
      <ConvertedRedirects
        FinalJson={finalJson}
        GenerateJsonOutput={generateJsonOutput(redirects)}
      />
    </div>
  );
}
