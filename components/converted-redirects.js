//import components
import CopyButton from "./copy-to-clipboard";

export default function ConvertedRedirects({ FinalJson, GenerateJsonOutput }) {
  return (
    <div className="max-w-7xl mx-auto px-5 mb-7 md:mb-14">
      <h2 className="text-2xl font-bold mb-4">Your next.js config Output</h2>
      <form className="flex flex-col p-4 border border-gray-400 rounded-xl">
        <CopyButton Content={FinalJson} />
        <textarea
          className="w-full"
          col="1"
          rows="30"
          readOnly
          value={GenerateJsonOutput}
        />
      </form>
    </div>
  );
}
