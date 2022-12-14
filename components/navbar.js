import Link from "next/link";

export default function Navbar () {
    return (
        <div className="max-w-7xl mx-auto">
            <div id="navigation" className="flex flex-nowrap justify-between items-center px-5">
                <div id="logo">
                    <Link href="/" className="ease-linear transition-opacity hover:opacity-80">
                            <h1 className="font-bold">WordPress Redirect Converter to next.js</h1>
                    </Link>
                </div>
                <div className="py-5">   
                    <ul className="flex flex-wrap gap-2">
                        <li>
                            <Link href="/howtouse" className="ease-linear transition-opacity hover:opacity-80">
                                    How to use
                            </Link>
                        </li>
                        <li>
                            <a className="ease-linear transition-opacity hover:opacity-80" href="https://github.com/GrowthWizard/rankmath-yoast-redirect-to-nextjs-converter" title="Check Code on Github">Check out on GitHub</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}