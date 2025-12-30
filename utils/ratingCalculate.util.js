// calcula a média das avaliações, ignorando valores nulos ou indefinidos
export function ratingCalculateUtil(ratings) {
    console.log('>>> ratings no util', ratings);

    // Se não há ratings ou é um array vazio, retorna 0
    if (!ratings || !Array.isArray(ratings) || ratings.length === 0) {
        return 0;
    }

    // Filtra apenas valores numéricos válidos do campo rate
    const validRatings = ratings.filter(review =>
        review &&
        review.rate !== null &&
        review.rate !== undefined &&
        !isNaN(Number(review.rate)) &&
        Number(review.rate) > 0
    ).map(review => Number(review.rate));

    // Se não há ratings válidos, retorna 0
    if (validRatings.length === 0) {
        return 0;
    }

    const totalRatings = validRatings.reduce((acc, rate) => acc + rate, 0);
    const rate = totalRatings / validRatings.length;

    console.log('>>> rate calculado', rate);
    return Math.round(rate * 10) / 10; // Arredonda para 1 casa decimal
}