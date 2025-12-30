import SidebarComponent from '@/components/sidebar.component';
import ChatWindowComponent from '@/components/chatWindow.component';
import BottomNavComponent from '@/components/bottomNav.component';
import ThemeToggleComponent from '@/components/themeToggle.component';
import { ChatIcon, CallIcon, StatusIcon, ConfigIcon,SunIcon, MoonIcon, VideoIcon, DotsVerticalIcon } from '@/components/icons.component';
import '../../globals.css';


export default function ChatPage() {
  return (
    <div className="chat-app">
      <SidebarComponent />
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
            <ThemeToggleComponent />
            <span className="header-icon"><VideoIcon /></span>
            <span className="header-icon"><DotsVerticalIcon /></span>
          </div>
        </div>
        <ChatWindowComponent />
        <BottomNavComponent />
      </main>
    </div>
  );
}

