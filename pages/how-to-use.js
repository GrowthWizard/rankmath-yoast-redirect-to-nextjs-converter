import Head from "next/head";
import Image from "next/image";

export default function howtouse() {
  return (
    <div>
      <Head>
        <title>
          How to convert your WorPress Redirects from WordPress to next.js -
          wpToNext
        </title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Learn how to use wpToNext to convert your WordPress redirects generated by RankMath or YoastSEO to next.js in seconds."
        />
      </Head>
      <div className="bg-dark">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center px-5 py-8 md:py-16 border-b border-white">
          <div className="mb-7 md:max-w-1/2 md:mb-0 md:pr-[5%]">
            <h1 className="font-source-sans font-bold text-2xl text-white md:text-4xl">
              How to use wpToNext
            </h1>
            <p className="font-montserrat text-white">
              This simple and free tool was build, for website owners which decided to migrate their WordPress Websites to next.js or using next.js + WordPress together.
              If you want to setup redirects in next.js, you need to put your redirects into your next.config.js file. This is a bit tricky, because you need to write the redirects in a specific way. 
              And it would take forever if you write them all by yourself. That's why I created wpToNext to convert your WordPress redirects to next.js in seconds. For further information, please check out the video below.
            </p>
          </div>
          <div className="w-full md:max-w-1/2">
            <Image src="/images/dummy_700x400.png" width={700} height={400} />
            <span className="font-montserrat font-light text-white text-sm text-center">Tutorial is coming up soon!</span>
          </div>
        </div>
      </div>

      <div className="bg-dark">
        <div className="max-w-6xl mx-auto py-16 px-5">
          <div className="bg-dark-purple min-w-full border border-white rounded-lg py-4 mb-4 md:py-10 md:mb-10">
            <div className="flex flex-wrap gap-5 items-center p-5 md:p-30">
              <div className="md:max-w-[40%]">
                <h2 className="font-source-sans font-bold text-4xl text-white">
                  Why should you migrate your WordPress redirects to next.js?
                </h2>
              </div>
              <div className="md:max-w-[55%]">
                <p className="font-montserrat text-white mb-4">
                  In search engine optimization we use redirects to tell search
                  engines that our content or a url has moved to a new location.
                  This is important, because you want to transfer all that trust
                  you build with that url, or backlinks still pointing to this
                  url, to your website as well. <span className="bg-rosa">
                    Otherwise loss in traffic or rankings can occur.
                  </span></p>
        
                  <p className="font-montserrat text-white mb-4">
                  Just put yourself into the position of a webcrawler. Someone
                  told you in the past your content can be found on another url
                  and suddenly this redirect is gone. Maybe there is a third
                  party website that still links to your old url. In both
                  scenarios either the user or the webcrawler would be confused
                  or frustrated. That's why it's important to bring your
                  redirects with you.
                </p>
                <a href="https://www.searchenginejournal.com/ranking-factors/301-redirects/" title="Search Engine Journal about 301 redirects">
                <div className="font-source-sans text-white text-center bg-rosa py-4 px-6 mb-2 rounded-md min-w-full transition-colors ease-linear hover:bg-dark hover:border border-white md:min-w-[22%] md:mb-0">
                  Learn more about how Google handles redirects
                </div>
                </a>
              </div>
            </div>
          </div>

          <div className="min-w-full py-10 mb-4 md:mb-10">
            <div className="flex flex-wrap items-center md:p-30 border border-white rounded-lg md:border-0 md:rounded-none">
              <div className="bg-dark-purple md:max-w-1/2 order-1 border-0 md:border md:border-white md:rounded-lg p-5 md:p-10 md:-mr-8 md:z-20">
                <h2 className="font-source-sans font-bold text-4xl text-white mb-2 md:mb-4">
                  Yoast SEO vs RankMath - Which SEO Plugin is better?
                </h2>
                <a
                  href="https://raidboxes.io/en/blog/online-marketing/wordpress-seo-plugins/"
                  title="Yoast SEO and RankMath for WordPress compared"
                >
                  <div className="font-source-sans text-white text-center bg-rosa py-4 px-6 mb-2 rounded-md min-w-full transition-colors ease-linear hover:bg-dark hover:border border-white md:min-w-[22%] md:mb-0">
                    Read the full post
                  </div>
                </a>
              </div>
              <div className="bg-dark-purple md:max-w-1/2 md:bg-dark order-2 border-0 md:border md:border-white rounded-lg p-5 md:p-16 md:z-10">
                <p className="font-montserrat text-white">
                  Yoast SEO and RankMath are the two most popular solutions for optimizing your WordPress Website for search engines. 
                  Both are free. Both offer a the same of functionality. But which one is better? But don't worry, Im here to help you decide. That's
                  why I wrote this comprehensive guide to help you decide which SEO Plugin might be the best option for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
