export const requestApiProducts = async () => {
  const request = await fetch('https://api.mercadolibre.com/sites/MLB/search?q=$QUERY');
  const { results } = await request.json();
  return results;
};

export const requestApiProduct = async (id) => {
  const request = await fetch(`https://api.mercadolibre.com/items/${id}`);
  const result = await request.json();
  return result;
};
