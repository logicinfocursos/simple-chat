/*
    File: themeToggle.component.js
    Descrição: Componente para alternância entre tema claro e escuro no app.
*/
'use client'
import { useEffect, useState } from 'react';
import { SunIcon, MoonIcon } from '@/components/icons.component';

export default function ThemeToggleComponent() {
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
