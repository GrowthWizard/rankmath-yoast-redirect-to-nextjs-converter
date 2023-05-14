import Link from 'next/link';

//import components
import CopyButton from "./copy-to-clipboard";

export default function ConvertedRedirects({ FinalJson, GenerateJsonOutput }) {
  return (
    <div className="max-w-7xl mx-auto text-dark px-5 pt-8 pb-16">
      <h2 className="text-2xl text-white font-bold mb-4">
        Your next.js config Output
      </h2>
      <p className="text-white font-montserrat mb-7 md:max-w-xl">
        Copy the code below and paste it in your next.config.js file. For further information about how you setup redirects in next.js, <a className="text-rosa transition-colors hover:bg-dark-purple ease-linear" href="https://nextjs.org/docs/api-reference/next.config.js/redirects" title="Redirects in next.js">please follow the documentation</a>. I also <Link href="/how-to-use" className="text-rosa hover:bg-dark-purple transition-colors ease-linear"> dedicated to a full tutorial</Link>, in case you need more help.
      </p>
      <div className="flex justify-center md:justify-end">
        <CopyButton Content={FinalJson} />
      </div>
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
