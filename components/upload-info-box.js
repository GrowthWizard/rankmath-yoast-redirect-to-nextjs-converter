export default function UploadInfoBox({ CsvRows, CsvValues }) {
  return (
    <div className="px-5 max-w-7xl mx-auto pb-16">
      <h2 className="text-2xl font-bold mb-4">Your Upload:</h2>
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
