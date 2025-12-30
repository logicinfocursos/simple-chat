// Estrutura mockada de usuários e conversas para facilitar futura integração com banco de dados
export const users = [
    {
        id: 1,
        name: 'Alice Silva',
        avatar: 'https://xsgames.co/randomusers/avatar.php?g=female',
        online: true,
        conversations: [
            {
                id: 1,
                lastMessage: 'Olá, como você está?',
                lastTime: '10:30',
                messages: [
                    { id: 1, type: 'received', from: 1, text: 'Olá! Tudo bem?', time: '10:00' },
                    { id: 2, type: 'sent', from: 0, text: 'Tudo ótimo por aqui, e com você?', time: '10:05' }
                ]
            },
            {
                id: 2,
                lastMessage: 'Vamos marcar uma call?',
                lastTime: '11:00',
                messages: [
                    { id: 3, type: 'sent', from: 0, text: 'Vamos marcar uma call?', time: '11:00' },
                    { id: 4, type: 'received', from: 1, text: 'Pode ser sim!', time: '11:01' }
                ]
            },
            {
                id: 3,
                lastMessage: 'Recebeu o documento?',
                lastTime: '12:00',
                messages: [
                    { id: 5, type: 'sent', from: 0, text: 'Recebeu o documento?', time: '12:00' },
                    { id: 6, type: 'received', from: 1, text: 'Recebi sim, obrigado!', time: '12:01' }
                ]
            },
            {
                id: 4,
                lastMessage: 'Até mais!',
                lastTime: '13:00',
                messages: [
                    { id: 7, type: 'received', from: 1, text: 'Até mais!', time: '13:00' }
                ]
            }
        ]
    },
    {
        id: 2,
        name: 'Beto Rocha',
        avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
        online: false,
        conversations: [
            {
                id: 1,
                lastMessage: 'O projeto está pronto.',
                lastTime: 'ONTEM',
                messages: [
                    { id: 8, type: 'received', from: 2, text: 'O projeto está pronto.', time: 'ONTEM' }
                ]
            },
            {
                id: 2,
                lastMessage: 'Pode revisar o PR?',
                lastTime: '09:30',
                messages: [
                    { id: 9, type: 'sent', from: 0, text: 'Pode revisar o PR?', time: '09:30' },
                    { id: 10, type: 'received', from: 2, text: 'Vou olhar agora!', time: '09:31' }
                ]
            },
            {
                id: 3,
                lastMessage: 'Enviado por e-mail.',
                lastTime: '10:00',
                messages: [
                    { id: 11, type: 'sent', from: 0, text: 'Enviei por e-mail.', time: '10:00' },
                    { id: 12, type: 'received', from: 2, text: 'Recebido!', time: '10:01' }
                ]
            },
            {
                id: 4,
                lastMessage: 'Valeu!',
                lastTime: '10:30',
                messages: [
                    { id: 13, type: 'received', from: 2, text: 'Valeu!', time: '10:30' }
                ]
            }
        ]
    },
    {
        id: 3,
        name: 'Carla Nunes',
        avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
        online: true,
        conversations: [
            {
                id: 1,
                lastMessage: 'Estou testando a nova interface do chat mobile-first.',
                lastTime: '10:06',
                messages: [
                    { id: 14, type: 'received', from: 3, text: 'Estou testando a nova interface do chat mobile-first.', time: '10:06' },
                    { id: 15, type: 'sent', from: 0, text: 'Ficou muito boa! O modo escuro está excelente.', time: '10:10' }
                ]
            },
            {
                id: 2,
                lastMessage: 'Pode me enviar o n8n?',
                lastTime: '21:15',
                messages: [
                    { id: 16, type: 'received', from: 3, text: 'Pode me enviar o n8n?', time: '21:15' }
                ]
            },
            {
                id: 3,
                lastMessage: 'Obrigada!',
                lastTime: '22:00',
                messages: [
                    { id: 17, type: 'sent', from: 0, text: 'De nada!', time: '22:00' },
                    { id: 18, type: 'received', from: 3, text: 'Obrigada!', time: '22:01' }
                ]
            },
            {
                id: 4,
                lastMessage: 'Até amanhã!',
                lastTime: '23:00',
                messages: [
                    { id: 19, type: 'received', from: 3, text: 'Até amanhã!', time: '23:00' }
                ]
            }
        ]
    },
    {
        id: 4,
        name: 'Davi Mendes',
        avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
        online: false,
        conversations: [
            {
                id: 1,
                lastMessage: 'Beleza!',
                lastTime: '09:00',
                messages: [
                    { id: 20, type: 'received', from: 4, text: 'Beleza!', time: '09:00' }
                ]
            },
            {
                id: 2,
                lastMessage: 'Vamos almoçar?',
                lastTime: '12:30',
                messages: [
                    { id: 21, type: 'sent', from: 0, text: 'Vamos almoçar?', time: '12:30' },
                    { id: 22, type: 'received', from: 4, text: 'Bora!', time: '12:31' }
                ]
            },
            {
                id: 3,
                lastMessage: 'Cheguei no escritório.',
                lastTime: '08:00',
                messages: [
                    { id: 23, type: 'received', from: 4, text: 'Cheguei no escritório.', time: '08:00' }
                ]
            },
            {
                id: 4,
                lastMessage: 'Até mais tarde!',
                lastTime: '18:00',
                messages: [
                    { id: 24, type: 'sent', from: 0, text: 'Até mais tarde!', time: '18:00' },
                    { id: 25, type: 'received', from: 4, text: 'Até!', time: '18:01' }
                ]
            }
        ]
    }
];
