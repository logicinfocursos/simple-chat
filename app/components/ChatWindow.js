import { PlusIcon, EmojiIcon, SendIcon } from './Icons';

export default function ChatWindow() {
    // Estrutura de mensagens para simular agrupamento por remetente
    const messages = [
        { id: 1, type: 'received', avatar: 'https://xsgames.co/randomusers/avatar.php?g=female', name: 'Alice Silva', text: 'Olá! Tudo bem?', time: '10:00', showAvatar: true },
        { id: 2, type: 'sent', text: 'Tudo ótimo por aqui, e com você?', time: '10:05' },
        { id: 3, type: 'received', avatar: 'https://xsgames.co/randomusers/avatar.php?g=female', name: 'Carla Nunes', text: 'Estou testando a nova interface do chat mobile-first.', time: '10:06', showAvatar: true },
        { id: 4, type: 'sent', text: 'Ficou muito boa! O modo escuro está excelente.', time: '10:10' },
        { id: 5, type: 'received', avatar: 'https://xsgames.co/randomusers/avatar.php?g=female', name: 'Beto Rocha', text: 'Concordo plenamente. Vamos integrar com o n8n depois?', time: '10:12', showAvatar: true },
    ];
    return (
        <section className="chat-window">
            <div className="chat-date-label">HOJE</div>
            {messages.map((msg, idx) => (
                msg.type === 'received' ? (
                    <div className="chat-message received" key={msg.id}>
                        
                        <div className="msg-bubble tail-left">
                            <div className="msg-text">{msg.text}</div>
                            <div className="msg-time">{msg.time}</div>
                        </div>
                    </div>
                ) : (
                    <div className="chat-message sent" key={msg.id}>
                        <div className="msg-bubble tail-right">
                            <div className="msg-text">{msg.text}</div>
                            <div className="msg-time">{msg.time}</div>
                        </div>
                    </div>
                )
            ))}
            <form className="chat-input-bar chat-input-bar-bg">
                <span className="input-icon"><PlusIcon /></span>
                <div className="input-wrapper">
                    <input className="chat-input" placeholder="Mensagem" />
                    <span className="input-emoji"><EmojiIcon /></span>
                </div>
                <button className="chat-send-btn" type="submit"><SendIcon /></button>
            </form>
        </section>
    );
}
