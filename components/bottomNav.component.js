/*
    File: bottomNav.component.js
    Descrição: Barra de navegação inferior para mobile, com ícones de navegação do app.
*/
import { ChatIcon, CallIcon, StatusIcon, ConfigIcon } from '@/components/icons.component';

export default function BottomNavComponent() {
    return (
        <nav className="bottom-nav">
            <button className="nav-btn active" title="Chats">
                <ChatIcon />
                <span>Chats</span>
            </button>
            <button className="nav-btn" title="Chamadas">
                <CallIcon />
                <span>Chamadas</span>
            </button>
            <button className="nav-btn" title="Status">
                <StatusIcon />
                <span>Status</span>
            </button>
            <button className="nav-btn" title="Config">
                <ConfigIcon />
                <span>Config</span>
            </button>
        </nav>
    );
}
