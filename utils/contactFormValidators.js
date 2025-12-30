// Validações para o formulário de contato
export const validators = {
    email: (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email) return 'E-mail é obrigatório';
        if (!emailRegex.test(email)) return 'E-mail inválido';
        return '';
    },

    cellphone: (phone) => {
        const phoneRegex = /^(\+55\s?)?\(?([1-9][0-9])\)?\s?9?[0-9]{4}-?[0-9]{4}$/;
        if (!phone) return 'Celular é obrigatório';
        if (!phoneRegex.test(phone.replace(/\s/g, ''))) return 'Celular inválido';
        return '';
    },

    name: (name) => {
        if (!name) return 'Nome é obrigatório';
        if (name.length < 3) return 'Nome deve ter ao menos 3 caracteres';
        return '';
    },

    content: (content) => {
        if (!content) return 'Mensagem é obrigatória';
        if (content.length < 3) return 'Mensagem deve ter ao menos 3 caracteres';
        return '';
    },

    subject: (subject) => {
        if (!subject) return 'Assunto é obrigatório';
        return '';
    },

    owner: (owner) => {
        if (!owner) return 'Tipo de usuário é obrigatório';
        return '';
    },

    interactionType: (interactionType) => {
        if (!interactionType) return 'Categoria é obrigatória';
        return '';
    },

    topic: (topic) => {
        if (!topic) return 'Tópico é obrigatório';
        return '';
    },

    advertiserCode: (advertiserCode, owner) => {
        if (owner === 'advertiser' && !advertiserCode) {
            return 'Código do anunciante é obrigatório';
        }
        return '';
    }
};

// Função para validar todos os campos
export const validateAllFields = (formData) => {
    const errors = {};

    errors.name = validators.name(formData.name);
    errors.email = validators.email(formData.email);
    errors.cellphone = validators.cellphone(formData.cellphone);
    errors.subject = validators.subject(formData.subject);
    errors.content = validators.content(formData.content);
    errors.owner = validators.owner(formData.owner);
    errors.interactionType = validators.interactionType(formData.interactionType);
    errors.topic = validators.topic(formData.topic);
    errors.advertiserCode = validators.advertiserCode(formData.advertiserCode, formData.owner);

    // Remove campos sem erro
    Object.keys(errors).forEach(key => {
        if (!errors[key]) delete errors[key];
    });

    return errors;
};

// Verifica se o formulário está válido
export const isFormValid = (formData) => {
    const errors = validateAllFields(formData);
    return Object.keys(errors).length === 0;
};