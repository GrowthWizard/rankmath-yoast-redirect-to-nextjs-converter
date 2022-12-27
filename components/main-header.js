//import Components
import UploadButton from "../components/upload-button";
import PluginChoice from "./plugin-choice";

export default function MainHeader({
  PluginSelected,
  ChangeHandler,
  SetWordPressPlugin,
  sendError,
}) {
  return (
    <div
      id="header"
      className="min-h-[300px] bg-dark-purple text-white border-b-2 border-white py-7 mb-7 md:pt-10 md:pb-20"
    >
      <div className="flex flex-wrap items-center px-5">
        <div className="md:max-w-1/2 md:p-[5%]">
          <h1 className="font-source-sans font-bold text-2xl mb-2 md:mb-4 md:text-4xl">
            Convert your WordPress Redirects from RankMath or YoastSEO to
            next.js
          </h1>
          <p className="font-montserrat mb-4">
            This simple Tool will help you to convert your redirects generated
            by the{" "}
            <a
              href="https://wordpress.org/plugins/wordpress-seo/"
              title="Yoast SEO Plugin"
              className="font-bold"
            >
              YoastSEO
            </a>{" "}
            or{" "}
            <a
              href="https://wordpress.org/plugins/seo-by-rank-math/"
              title="RankMath SEO Plugin"
              className="font-bold"
            >
              RankMath
            </a>{" "}
            Plugin for WordPress, to your{" "}
            <a
              href="https://nextjs.org"
              title="Nextjs Framework"
              className="font-bold"
            >
              next.js
            </a>{" "}
            Application. Check the Documentation for full instructions in how to
            use this application.
          </p>
          <ol className="font-montserrat pl-7 list-decimal mb-5">
            <li>Export the Redirects from your SEO Plugin</li>
            <li>Upload the exported .csv file on this website</li>
            <li>This tool will convert your redirects into readible code</li>
            <li>Paste the converted code into your next.config.js file</li>
          </ol>
        </div>
        <div className="md:max-w-1/2 md:p-[5%]">
          <div className="flex flex-wrap flex-col justify-center text-black bg-white p-[5%] md:min-h-full rounded-lg md:py-16">
            <h2 className="font-montserrat text-lg font-bold md:text-xl">
              Step 1: Choose your SEO Plugin!
            </h2>
            <p className="font-source-sans text-sm mb-2">
              <b>Hint:</b> Statuscode 307 and Regex Redirects are currently not
              supported.
            </p>
            <PluginChoice SetWordPressPlugin={SetWordPressPlugin} />
            <h2 className="font-montserrat text-lg font-bold md:text-xl">
              Step 2: Upload Redirects Export!
            </h2>
            <UploadButton
              ChangeHandler={ChangeHandler}
              PluginSelected={PluginSelected}
              sendError={sendError}
            />
            <p className="font-source-sans text-sm mb-7">
              * No data will be stored on our servers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
