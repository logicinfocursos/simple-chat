export const getPriceUtil = ({price, pricepromo=0}) => {

    if (pricepromo && pricepromo > 0 && pricepromo < price)  return pricepromo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    return price ? price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) : 'R$ 0,00';

}