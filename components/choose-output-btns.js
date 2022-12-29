export default function chooseOutputBtns({ ShowResult }) {
  return (
    <div
      id="choose-output"
      className="flex flex-wrap justify-between max-w-7xl mx-auto px-5 bg-dark border-b md:border border-white pt-6 pb-10 rounded md:-mt-24"
    >
      <div
        id="upload"
        className="font-source-sans text-white text-center bg-rosa py-4 px-6 mb-2 rounded-md min-w-full transition-colors ease-linear hover:bg-dark hover:border border-white md:min-w-[22%] md:mb-0"
        onClick={ShowResult}
      >
        Show your Upload
      </div>
      <div
        id="redirects"
        className="font-source-sans text-white text-center bg-rosa py-4 px-6 mb-2 rounded-md min-w-full transition-colors ease-linear hover:bg-dark hover:border border-white md:min-w-[22%] md:mb-0"
        onClick={ShowResult}
      >
        Show 301 Redirects only
      </div>
      <div
        id="deleted"
        className="font-source-sans text-white text-center bg-rosa py-4 px-6 mb-2 rounded-md min-w-full transition-colors ease-linear hover:bg-dark hover:border border-white md:min-w-[22%] md:mb-0"
        onClick={ShowResult}
      >
        Show 410 Redirects only
      </div>
      <div
        id="converted"
        className="font-source-sans text-white text-center bg-rosa py-4 px-6 mb-2 rounded-md min-w-full transition-colors ease-linear hover:bg-dark hover:border border-white md:min-w-[22%] md:mb-0"
        onClick={ShowResult}
      >
        Show Converted Redirects
      </div>
    </div>
  );
}
