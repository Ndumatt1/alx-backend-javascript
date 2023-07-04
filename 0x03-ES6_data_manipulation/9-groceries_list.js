export default function groceriesList() {
  const groceries = [
    ['Apples', 10],
    ['Tomatoes', 10],
    ['Pasta', 1],
    ['Rice', 1],
    ['Banana', 5],
  ];

  const map = new Map(groceries);

  return map;

  /* map.set('Apples', 10);
    map.set('Tomatoes', 10);
    map.set('Pasta', 1);
    map.set('Rice', 5);
    map.set('Banana', 5);

    return map; */
}
