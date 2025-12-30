

import { PlusIcon, EmojiIcon, SendIcon } from '@/components/icons.component';
import { users } from '@/data-mocke/data';


export default function ChatWindowComponent({ userId }) {
    // Exibe conversas do usuário selecionado
    const user = users.find(u => u.id === userId);
    const conversation = user && user.conversations.length > 0 ? user.conversations[0] : null;
    const messages = conversation ? conversation.messages : [];
    return (
        <section className="chat-window">
            <div className="chat-date-label">HOJE</div>
            {messages.map((msg, idx) => {
                const user = users.find(u => u.id === msg.from);
                if (msg.type === 'received') {
                    return (
                        <div className="chat-message received" key={msg.id}>
                            <div className="msg-bubble tail-left">
                                <div className="msg-text">{msg.text}</div>
                                <div className="msg-time">{msg.time}</div>
                            </div>
                        </div>
                    );
                } else {
                    return (
                        <div className="chat-message sent" key={msg.id}>
                            <div className="msg-bubble tail-right">
                                <div className="msg-text">{msg.text}</div>
                                <div className="msg-time">{msg.time}</div>
                            </div>
                        </div>
                    );
                }
            })}
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

