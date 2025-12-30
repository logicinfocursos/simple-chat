// convert tags string to list
export const tagsToListUtil = (tags) => {
    if (!tags) return [];

    // Se já é um array, retorna o array
    if (Array.isArray(tags)) return tags;

    // Se é string, faz o split
    if (typeof tags === 'string') {
        return tags.split(',').map(tag => tag.trim()).filter(tag => tag);
    }

    // Para outros tipos, retorna array vazio
    return [];
}