// Função para pegar iniciais do nome
export const getInitialsUtil = (name = "") => {
    const parts = name.split(" ");
    if (parts.length === 1) return parts[0][0]?.toUpperCase() || "A";
    return (parts[0][0] + (parts[1]?.[0] || "")).toUpperCase();
};