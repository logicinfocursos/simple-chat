/*
    File: sidebar.component.js
    Descrição: Exibe a lista de usuários e conversas, permite selecionar o usuário ativo.
*/
import { users } from '@/data-mocke/data';
import { moreInfoUtil } from '@/utils';

export default function SidebarComponent({ selectedUserId, onSelectUser }) {
    return (
        <aside className="sidebar">
            <div className="sidebar-header">
                <h2>Conversas</h2>
                <input className="search" placeholder="Pesquisar contatos..." />
            </div>
            <ul className="chat-list">
                {users.map((user) => {
                    const conversation = user.conversations[0];
                    return (
                        <li
                            className={`chat-item${selectedUserId === user.id ? ' active' : ''}`}
                            key={`user${user.id}-conv${conversation.id}`}
                            onClick={() => onSelectUser(user.id)}
                            style={{ cursor: 'pointer' }}
                        >
                            <img src={user?.avatar} alt={user?.name} className="avatar" />
                            <div>
                                <div className="chat-name">
                                    {user?.name} {user?.online && <span className="online-badge" title="Online"></span>}
                                </div>
                                <div className="chat-last-msg">{moreInfoUtil({ content: conversation.lastMessage, maxlength: 20 })}</div>
                            </div>
                            <span className="chat-time">{conversation.lastTime}</span>
                        </li>
                    );
                })}
            </ul>
        </aside>
    );
}


