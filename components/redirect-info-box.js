export default function RedirectInfoBox({ CsvRows, Redirects, StatusDeleted }) {
  return (
    <div className="px-5 max-w-7xl mx-auto mb-7">
      <h2 className="text-2xl font-bold mb-4">Only Redirects</h2>
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
            {Redirects.map((value, index) => {
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
