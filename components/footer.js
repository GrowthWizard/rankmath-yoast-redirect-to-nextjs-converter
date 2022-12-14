import Link from 'next/link';

export default function Footer () {
    return (
        <footer id="footer" className="py-10 px-5 bg-gray-600 text-white">
            <div className="max-w-7xl mx-auto">
                <ul className="flex flex-wrap justify-center gap-2 source-sans mb-2">
                    <li className="border-r pr-2 border-white">Developed by <a className="text-rosa ease-linear transition-opacity hover:opacity-80" href="https://steindominik.de" title="Portfolio of Dominik Stein Web Developer">Dominik Stein</a></li>
                    <li>In Cooperation with <a className="text-rosa ease-linear transition-opacity hover:opacity-80" href="https://firmcatalyst.de" title="FirmCatalyst SEO Agency Berlin">FirmCatalyst.de</a></li>
                </ul>
                <ul className="flex flex-wrap justify-center gap-2 source-sans ">
                    <li><Link className="text-white ease-linear transition-opacity hover:opacity-80" href="/site-notice" title="Site Notice">Site Notice</Link></li>
                    <li><Link className="text-white ease-linear transition-opacity hover:opacity-80" href="/privacy-policy" title="Privacy Policy">Privacy Policy</Link></li>
                </ul>
            </div>
        </footer>
    )
}