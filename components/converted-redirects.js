//import components
import CopyButton from "./copy-to-clipboard";

export default function ConvertedRedirects({ FinalJson, GenerateJsonOutput }) {
  return (
    <div className="max-w-7xl mx-auto text-dark px-5 md:pb-16">
      <h2 className="text-2xl text-white font-bold mb-4">Your next.js config Output</h2>
      <CopyButton Content={FinalJson} />
      <form className="flex flex-col p-4 border border-gray-400 rounded-xl bg-white">
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