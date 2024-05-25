import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-black text-white text-center py-16 p-32">
            <h2 className="text-3xl font-bold mb-4">
                Ready to elevate your digital experience?
            </h2>
            <p className="text-lg mb-8">
                Reach out to me today and let's discuss how my front-end skills can help your team succeed.
            </p>
            <a
                href="mailto:your.email@example.com"
                className="inline-block bg-teal-500 text-black font-semibold py-3 px-6 rounded-full hover:bg-teal-600 transition-colors"
            >
                Contact Me Now <span className="ml-2">→</span>
            </a>
            <div className="mt-16 mb-40">
                <div className="flex justify-center space-x-4 mt-4">
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <img src="/icons/instagram.svg" alt="Instagram" className="w-6 h-6" />
                    </a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <img src="/icons/github.svg" alt="GitHub" className="w-6 h-6" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                        <img src="/icons/twitter.svg" alt="Twitter" className="w-6 h-6" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <img src="/icons/linkedin.svg" alt="LinkedIn" className="w-6 h-6" />
                    </a>
                </div>
            </div>
        </footer>
    );
}
