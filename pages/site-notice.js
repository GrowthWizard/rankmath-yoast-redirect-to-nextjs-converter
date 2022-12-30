import Head from "next/head";
export default function SiteNotice() {
    return (
        <div>
        <Head>
            <title>Site Notice | WPtoNext</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta name="robots" content="noindex" />
        </Head>
        <article className="bg-dark">
            <main className="max-w-7xl mx-auto text-white py-7 px-5 md:py-16">
                <h1 className="font-source-sans text-4xl mb-5">Site Notice</h1>
                <h2 className="font-source-sans text-2xl mb-7">Information pursuant to Sect. 5 German Telemedia Act (TMG)</h2>
                <p className="font-montserrat mb-5">Dominik Stein<br />
                c/o: steindominik.de<br />
                Utrechter Str. 44<br />
                13347 Berlin</p>

                <h2 className="font-source-sans mb-7 text-2xl">Contact</h2>
                <p className="font-montserrat mb-5">Phone: +4915678554040<br />
                E-mail: hello@steindominik.de</p>

                <h2 className="font-source-sans mb-7 text-2xl">VAT ID</h2>
                <p className="font-montserrat mb-5">Sales tax identification number according to Sect. 27 a of the Sales Tax Law:<br />
                DE296041107</p>

                <h2 className="font-source-sans mb-7 text-2xl">Person responsible for editorial</h2>
                <p className="font-montserrat mb-5">Dominik Stein<br />
                Utrechter Str. 44<br />
                13347 Berlin</p>

                <h2 className="font-source-sans mb-7 text-2xl">EU dispute resolution</h2>
                <p className="font-montserrat mb-5">The European Commission provides a platform for online dispute resolution (ODR): <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr/</a>.<br /> Our e-mail address can be found above in the site notice.</p>

                <h2 className="font-source-sans mb-7 text-2xl">Dispute resolution proceedings in front of a consumer arbitration board</h2>
                <p className="font-montserrat mb-5">We are not willing or obliged to participate in dispute resolution proceedings in front of a consumer arbitration board.</p>
            </main>
        </article>
        </div>
    )
}