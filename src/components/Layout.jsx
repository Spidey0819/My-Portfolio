// src/components/Layout.jsx
import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react';

const Layout = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: 'S.H.I.E.L.D Profile', path: '/about', icon: '🎯' },
        { name: 'Mission Records', path: '/projects', icon: '📋' },
        { name: 'Power Stats', path: '/skills', icon: '⚡' },
        { name: 'Stark Communications', path: '/contact', icon: '📡' },
    ];

    return (
        <div>
            {/* Navbar */}
            <nav className="bg-black sticky top-0 z-50 border-b border-[#e62429]/20">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex justify-between h-16">
                        {/* Logo */}
                        <div className="flex-shrink-0 flex items-center">
                            <Link to="/" className="text-2xl font-bangers text-[#e62429] hover:text-[#fdd835]">
                                Marvelous Portfolio
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex md:items-center">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.path}
                                    className="px-4 py-2 text-lg font-bangers text-white hover:text-[#fdd835]
                                             hover:bg-[#e62429]/10 rounded-md transition-colors flex items-center gap-2"
                                >
                                    <span>{item.icon}</span>
                                    <span>{item.name}</span>
                                </Link>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden flex items-center">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="text-white hover:text-[#fdd835] p-2"
                                aria-label={isOpen ? 'Close menu' : 'Open menu'}
                            >
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Mobile Navigation */}
                    <div
                        className={`md:hidden transition-all duration-300 ${
                            isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                        } overflow-hidden`}
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.path}
                                    className="block px-3 py-2 text-base font-bangers text-white hover:text-[#fdd835]
                                             hover:bg-[#e62429]/10 rounded-md transition-colors flex items-center gap-2"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <span>{item.icon}</span>
                                    <span>{item.name}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="min-h-[calc(100vh-4rem)]">
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;