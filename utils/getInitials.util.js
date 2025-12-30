// Função para pegar iniciais do nome
/*
    File: getInitials.util.js
    Descrição: Retorna as iniciais de um nome, útil para avatares ou identificadores.
*/
export const getInitialsUtil = (name = "") => {
    const parts = name.split(" ");
    if (parts.length === 1) return parts[0][0]?.toUpperCase() || "A";
    return (parts[0][0] + (parts[1]?.[0] || "")).toUpperCase();
};