import '../index.css'
const Footer = () => {
    return (
        <footer className="w-full border-t border-slate-100 bg-white">
            <div className="mx-auto w-full container px-8 pt-16 pb-12">

                {/* Main Footer */}
                <div className="flex items-start justify-between gap-16">

                    {/* Brand */}
                    <div className="max-w-">
                        {/* Logo */}
                        <div className="mb-3 flex items-center gap-2.5">
                            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-pink-500 to-violet-600">
                                <span className="text-xs font-black text-white">
                                    DS
                                </span>
                            </div>

                            <div className="text-lg font-bold">
                                <span className="text-slate-900">Dev </span>
                                <span className="text-pink-600">Stack</span>
                            </div>
                        </div>

                        {/* Description */}
                        <p className="text-xs leading-5 text-slate-500">
                            Curated tools, technologies, and resources for developers building
                            modern software.
                        </p>

                        {/* Social Links */}
                        <div className="mt-3 flex items-center gap-4">
                            <a
                                href="#"
                                className="text-xs font-semibold text-slate-600"
                            >
                                GitHub
                            </a>

                            <a
                                href="#"
                                className="text-xs font-semibold text-slate-600"
                            >
                                Twitter
                            </a>

                            <a
                                href="#"
                                className="text-xs font-semibold text-slate-600"
                            >
                                LinkedIn
                            </a>
                        </div>
                    </div>


                    {/* Link Columns */}
                    <div className="flex gap-20">

                        {/* Product */}
                        <div>
                            <h3 className="mb-4 text-xs font-bold uppercase tracking-wide text-slate-900">
                                Product
                            </h3>

                            <ul className="list-none space-y-2.5 p-0">
                                <li>
                                    <a href="#" className="text-xs text-slate-500">
                                        Home
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="text-xs text-slate-500">
                                        Technologies
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="text-xs text-slate-500">
                                        Projects
                                    </a>
                                </li>
                            </ul>
                        </div>


                        {/* Company */}
                        <div>
                            <h3 className="mb-4 text-xs font-bold uppercase tracking-wide text-slate-900">
                                Company
                            </h3>

                            <ul className="list-none space-y-2.5 p-0">
                                <li>
                                    <a href="#" className="text-xs text-slate-500">
                                        About
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="text-xs text-slate-500">
                                        Contact
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="text-xs text-slate-500">
                                        Careers
                                    </a>
                                </li>
                            </ul>
                        </div>


                        {/* Legal */}
                        <div>
                            <h3 className="mb-4 text-xs font-bold uppercase tracking-wide text-slate-900">
                                Legal
                            </h3>

                            <ul className="list-none space-y-2.5 p-0">
                                <li>
                                    <a href="#" className="text-xs text-slate-500">
                                        Privacy Policy
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="text-xs text-slate-500">
                                        Terms of Service
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>


                {/* Bottom Footer */}
                <div className="mt-14 flex items-center justify-between border-t border-slate-100 pt-8">

                    <p className="text-xs text-slate-400">
                        © 2026 Dev Stack. All rights reserved.
                    </p>

                    <div className="flex gap-6">
                        <a href="#" className="text-xs text-slate-400">
                            Privacy
                        </a>

                        <a href="#" className="text-xs text-slate-400">
                            Terms
                        </a>
                    </div>

                </div>

            </div>
        </footer>
    );
};

export default Footer;