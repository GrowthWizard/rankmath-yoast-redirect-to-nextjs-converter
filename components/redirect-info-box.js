export default function RedirectInfoBox({ CsvRows, Redirects, StatusDeleted, Output }) {

  const OutputSetting = Output === "status-deleted" ? StatusDeleted : Redirects;
  const OutputMesssageRedirects = "The following table will only show the 301 redirects we generated from your uploaded .csv file.";
  const OutputMesssageDeleted = "The following table will only show the 410 redirects we generated from your uploaded .csv file. Right now our tool is not able to convert this statuscodes into your next.js config file.";


  return (
    <div className="px-5 max-w-7xl mx-auto pt-8 pb-16">
      <h2 className="font-source-sans text-2xl font-bold mb-2">Only Redirects</h2>
      {Output === "status-deleted" ? <p className="font-montserrat mb-7 md:max-w-xl">{OutputMesssageDeleted}</p> : <p className="font-montserrat mb-7 md:max-w-xl">{OutputMesssageRedirects}</p>}
      <div className="p-4 max-h-60 overflow-y-auto border border-gray-400 rounded-xl">
        {/* Only shows the redirects */}
        <table>
          <thead>
            <tr>
              {CsvRows.map((rows, index) => {
                return <th key={index}>{rows}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {OutputSetting.map((value, index) => {
              return (
                <tr key={index}>
                  {value.map((val, i) => {
                    return <td key={i}>{val}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
