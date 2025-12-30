import Sidebar from './components/Sidebar';
import ChatWindow from './components/ChatWindow';
import BottomNav from './components/BottomNav';
import { ChatIcon, CallIcon, StatusIcon, ConfigIcon } from './components/Icons';
import ThemeToggle from './components/ThemeToggle';
import { SunIcon, MoonIcon, VideoIcon, DotsVerticalIcon } from './components/Icons';
import './globals.css';


export default function Home() {
  return (
    <div className="chat-app">
      <Sidebar />
      {/* Barra lateral de navegação fixa para desktop */}
      <nav className="side-nav flex justify-around items-center flex-col">
        <button className="text-blue-500 flex flex-col items-center gap-1" title="Chats">
          <ChatIcon  />
          <span className="text-[8px] font-bold">Chats</span>
        </button>
        <button className="text-blue-500 flex flex-col items-center gap-1" title="Chamadas">
          <CallIcon />
          <span className="text-[8px] font-bold">Chamadas</span>
        </button>
        <button className="text-blue-500 flex flex-col items-center gap-1" title="Status">
          <StatusIcon />
          <span className="text-[8px] font-bold">Status</span>
        </button>
        <button className="text-blue-500 flex flex-col items-center gap-1"  title="Config">
          <ConfigIcon />
          <span className="text-[8px] font-bold">Config</span>
        </button>
      </nav>
      <main className="main-content">
        <div className="chat-header chat-header-bg">
          <div className="chat-user-info">
            <img src="https://xsgames.co/randomusers/avatar.php?g=female" alt="Avatar" className="avatar" />
            <div>
              <div className="user-name">Alice Silva</div>
              <div className="user-status">Online</div>
            </div>
          </div>
          <div className="chat-header-icons">
            <ThemeToggle />
            <span className="header-icon"><VideoIcon /></span>
            <span className="header-icon"><DotsVerticalIcon /></span>
          </div>
        </div>
        <ChatWindow />
        <BottomNav />
      </main>
    </div>
  );
}

