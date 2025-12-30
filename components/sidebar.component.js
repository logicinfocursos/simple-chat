export default function SidebarComponent() {
    return (
        <aside className="sidebar">
            <div className="sidebar-header">
                <h2>Conversas</h2>
                <input className="search" placeholder="Pesquisar contatos..." />
            </div>
            <ul className="chat-list">
                <li className="chat-item active">
                    <img src="https://xsgames.co/randomusers/avatar.php?g=female" alt="Alice Silva" className="avatar" />
                    <div>
                        <div className="chat-name">Alice Silva <span className="online-badge" title="Online"></span></div>
                        <div className="chat-last-msg">Olá, como você está?</div>
                    </div>
                    <span className="chat-time">10:30</span>
                </li>
                <li className="chat-item">
                    <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="Beto Rocha" className="avatar" />
                    <div>
                        <div className="chat-name">Beto Rocha</div>
                        <div className="chat-last-msg">O projeto está pronto.</div>
                    </div>
                    <span className="chat-time">ONTEM</span>
                </li>
                <li className="chat-item">
                    <img src="https://randomuser.me/api/portraits/women/2.jpg" alt="Carla Nunes" className="avatar" />
                    <div>
                        <div className="chat-name">Carla Nunes <span className="online-badge" title="Online"></span></div>
                        <div className="chat-last-msg">Pode me enviar o n8n?</div>
                    </div>
                    <span className="chat-time">21:15</span>
                </li>
                <li className="chat-item">
                    <img src="https://randomuser.me/api/portraits/men/2.jpg" alt="Davi Mendes" className="avatar" />
                    <div>
                        <div className="chat-name">Davi Mendes</div>
                        <div className="chat-last-msg">Beleza!</div>
                    </div>
                    <span className="chat-time">09:00</span>
                </li>
            </ul>
        </aside>
    );
}
