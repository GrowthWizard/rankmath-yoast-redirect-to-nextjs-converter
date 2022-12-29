export default function UploadInfoBox({ CsvRows, CsvValues }) {
  return (
    <div className="px-5 max-w-7xl mx-auto pt-8 pb-16">
      <h2 className="font-source-sans text-2xl font-bold mb-2">Your Upload:</h2>
      <p className="font-montserrat mb-7 md:max-w-xl">
        The following table will help you, to check if your .csv upload was
        successfull. Please check your if the data in your .csv file matches
        with the data in the table.
      </p>
      <div className="p-4 max-h-60 overflow-y-auto border border-gray-400 rounded-xl">
        <table>
          <thead>
            <tr>
              {CsvRows.map((rows, index) => {
                return <th key={index}>{rows}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {CsvValues.map((value, index) => {
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
