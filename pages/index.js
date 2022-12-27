/*
 * Will be used for reading a CSV File and convert it to JSON
 * Check Documentation: https://www.npmjs.com/package/papaparse
 */

import { useEffect, useState } from "react";
import Head from "next/head";
import Papa from "papaparse";
import dynamic from "next/dynamic";
import toast from "react-hot-toast";

// import Components
import MainHeader from "../components/main-header";
import ChooseOutputBtns from "../components/choose-output-btns";
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
  // State to store the users choice for which SEO Plugin he used for his redirects
  const [wpPluginSelected, setWpPluginSelected] = useState(false);

  // State to store the domain name of the users website
  const [usersDomain, setUsersDomain] = useState(null);

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

  // State to store the code which will be copied to the next.config.js by the user
  const [finalJson, setFinalJson] = useState(null);

  // State to hide or show the finalJson Output Form
  const [showFinalJson, setShowFinalJson] = useState(false);

  // State to store what result the user want to see
  const [output, setOutput] = useState("finalJson");

  useEffect(() => {
    if (parsedCsvData.length > 0) {
      setTimeout(toast.success("CSV File has been uploaded!"), 1000);
    }
  }, [parsedCsvData]);

  useEffect(() => {
    setFinalJson(generateJsonOutput(redirects));
  }, [redirects, finalJson]);

  useEffect(() => {

    if (output === "upload" || output === "redirects" || output === "status-deleted" && redirects.length < 1) {
      toast.error("Please upload a CSV file with redirects first!");
    }

    if (output === "finalJson" && redirects.length > 0) {
      toast.success("Only show your converted redirects.");
    }

    if (output === "redirects" && redirects.length > 0) {
      toast.success("Only 301 redirects will be shown!");
    }

    if (output === "status-deleted" && statusDeleted.length > 0) {
      toast.success("Only 410 redirects will be shown!");
    }

    if (output === "upload" && redirects.length > 0) {
      toast.success("This is the data from your csv file.");
    }

    if (redirects.length && statusDeleted.length < 1) {
      toast.error("Please upload a CSV file with redirects first!");
    }
  }, [output]);

  function generateJsonOutput(redirects) {
    if (redirects.length < 1) {
      return "Your final json output for your next.js file will be shown here.\n In Order to use the tool, please export your redirects from your WordPress SEO Plugin and upload the .csv file first.";
    } else {
      const jsonOutput = [];
    if (wpPluginSelected === "RankMath") {
      jsonOutput.push(
        redirects.map((d) => {
          console.log(d);

          // strip root domain from string
          let destinationDomain = d[3].replace(usersDomain, "");
          return {
            source: `/${d[1]}`,
            destination: `${destinationDomain}`,
            permanent: true,
          };
        })
      );
    }

    if (wpPluginSelected === "YoastSEO") {
      jsonOutput.push(
        redirects.map((d) => {
          return { source: `${d[0]}`, destination: `${d[1]}`, permanent: true };
        })
      );
    }

    if (wpPluginSelected !== false) {
      let str = JSON.stringify(jsonOutput[0], null, "\t");
      //console.log(str);
      // RankMath Improvement, remove Root Domain from String via regex, for tomorrow.
      let strWithOutQuotes = str.replace(/"([^"]+)":/g, "$1:");

      let json = `async redirects() { 
          return ${strWithOutQuotes};
        },`;
      return json;
    }
    }
    
  }

  const setWordPressPlugin = (event) => {
    if (event.target.value === "rankmath") {
      if (usersDomain === null) {
        /*
         * Prompt the user to enter his domain name, so we can filter the output correctly.
         * RankMath adds the root domain to the destination url, which is unnecessary for our final next.js output
         */

        let domain;
        domain = window.prompt(
          "Please enter your domain name, so we can filter format your redirect output correctly.",
          "https://example.com"
        );

        // RankMaths csv export has a trailing slash, which we need to remove, for our final output
        if (usersDomain) {
          if (domain.slice(-1) === "/") {
            domain = domain.slice(0, -1);
            console.log(domain);
          }
        }

        setUsersDomain(domain);
      }

      toast.success("RankMath has been selected");
      setWpPluginSelected("RankMath");
    }

    if (event.target.value === "yoast") {
      toast.success("YoastSEO has been selected");
      setWpPluginSelected("YoastSEO");
    }
  };

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

        if (wpPluginSelected === "RankMath") {
          valuesArray.map((d) => {
            if (d[4] === "301") {
              redirects.push(d);
            }

            if (d[4] === "410") {
              statusDeleted.push(d);
            }
          });
        }

        if (wpPluginSelected === "YoastSEO") {
          valuesArray.map((d) => {
            if (d[2] === "301") {
              redirects.push(d);
            }

            if (d[2] === "410") {
              statusDeleted.push(d);
            }
          });
        }

        const sendError = () => {
          toast.error("Error, please select your WordPress SEO Plugin");
        };

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

  function showResult(e) {
    switch (e.target.id) {
      case "upload":
        setOutput("upload");
        break;
      case "redirects":
        setOutput("redirects");
        break;
      case "deleted":
        setOutput("status-deleted");
        break;
      case "converted":
        setOutput("finalJson");
        break;
      default:
        console.log(
          `Something went wrong, setting the output state: ${output}`
        );
    }
  }

  return (
    <div className="bg-dark text-white">
      <Head>
        <title>wpToNext - Convert WordPress Redirects to next.js</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Convert your WordPress Redirects from RankMath or YoastSEO to next.js Code"
        />
      </Head>
      <MainHeader
        ChangeHandler={changeHandler}
        PluginSelected={wpPluginSelected}
        SetWordPressPlugin={setWordPressPlugin}
      />
      <ChooseOutputBtns ShowResult={showResult} />
      {csvRows.length && csvValues.length > 0 && output === "upload" ? (
        <UploadInfoBox CsvRows={csvRows} CsvValues={csvValues} />
      ) : null}

      {(output == "redirects" || output == "status-deleted") && redirects.length > 0 ? (
        <RedirectInfoBox
          CsvRows={csvRows}
          Redirects={redirects}
          StatusDeleted={statusDeleted}
          Output={output}
        />
      ) : null}

      {output === "finalJson" ? (
        <ConvertedRedirects
          FinalJson={finalJson}
          showFinalJson={showFinalJson}
          GenerateJsonOutput={generateJsonOutput(redirects)
          }
        />
      ) : null}
    </div>
  );
}
