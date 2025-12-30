'use client'
import { useEffect, useState } from 'react';
import { SunIcon, MoonIcon } from './Icons';

export default function ThemeToggle() {
    const [dark, setDark] = useState(false);
    useEffect(() => {
        setDark(document.body.classList.contains('dark'));
    }, []);
    const toggleTheme = () => {
        document.body.classList.toggle('dark');
        setDark(document.body.classList.contains('dark'));
    };
    return (
        <button id="theme-toggle" className="theme-toggle" aria-label="Alternar tema" onClick={toggleTheme}>
            {dark ? <SunIcon /> : <MoonIcon />}
        </button>
    );
}
