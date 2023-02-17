export const requestApiProducts = async () => {
  const request = await fetch('https://api.mercadolibre.com/sites/MLB/search?q=$QUERY');
  const { results } = await request.json();
  return results;
};

export const requestApiProductByID = async (id) => {
  const request = await fetch(`https://api.mercadolibre.com/items/${id}`);
  const result = await request.json();
  return result;
};

export const requestApiProductByName = async (name) => {
  const request = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${name}`);
  const { results } = await request.json();
  return results;
};

export const requestApiCategoryByName = async (categoryId) => {
  const request = await fetch(`https://api.mercadolibre.com/sites/MLA/search?category=${categoryId}`);
  const { results } = await request.json();
  return results;
};

export const requestApiCategory = async () => {
  const request = await fetch(`https://api.mercadolibre.com/sites/MLB/categories`);
  const result = await request.json();
  return result;
};
