import images from "./images";

const wines = [
  {
    title: "Chapel Hill Shiraz",
    price: "$56",
    tags: "AU | Bottle",
  },
  {
    title: "Catena Malbee",
    price: "$59",
    tags: "AU | Bottle",
  },
  {
    title: "La Vieillw Rose",
    price: "$44",
    tags: "FR | 750 ml",
  },
  {
    title: "Rhino Pale Ale",
    price: "$31",
    tags: "CA | 750 ml",
  },
  {
    title: "Irish Guinness",
    price: "$26",
    tags: "IE | 750 ml",
  },
];

const cocktails = [
  {
    title: "Aperol Sprtiz",
    price: "$20",
    tags: "Aperol | Villa Marchesi prosecco | soda | 30 ml",
  },
  {
    title: "Dark 'N' Stormy",
    price: "$16",
    tags: "Dark rum | Ginger beer | Slice of lime",
  },
  {
    title: "Daiquiri",
    price: "$10",
    tags: "Rum | Citrus juice | Sugar",
  },
  {
    title: "Old Fashioned",
    price: "$31",
    tags: "Bourbon | Brown sugar | Angostura Bitters",
  },
  {
    title: "Negroni",
    price: "$26",
    tags: "Gin | Sweet Vermouth | Campari | Orange garnish",
  },
];

const awards = [
  {
    imgUrl: images.award01,
    title: "Emmanuella",
    subtitle: "Absolutely loved the flavors—each bite was unforgettable!",
  },
  {
    imgUrl: images.award02,
    title: "Rukome",
    subtitle: "Exceptional service and the food? Simply divine.",
  },
  {
    imgUrl: images.award03,
    title: "Toyo",
    subtitle: "A perfect blend of taste, atmosphere, and presentation.",
  },
  {
    imgUrl: images.award05,
    title: "Temmy",
    subtitle: "Hands down the best dining experience I’ve had this year.",
  },
];

const blog = [
  {
    title:"A Breakfast Tale of Delight",
    subtitle:'Picture a lazy Sunday morning or a leisurely weekend brunch with friends and family. The warm, fluffy pancakes arrive at your table, and your senses are immediately awakened by the irresistible aroma of fresh batter sizzling on a griddle. This was the perfect form of bonding for us',
  },
  {
    title:'Coffee and Pancakes: A Classic Romance',
    subtitle:' The rich, earthy notes of coffee, whether black or adorned with cream and sugar, harmonize beautifully with the sweetness of maple syrup or a dusting of powdered sugar on your pancakes. That first sip of warm coffee followed by a bite of pancake is a symphony of contrasting flavors that blend to perfection. We want to share with you this deliciousness',
  },
  {
    title:'Tea for Tranquility',
    subtitle:'If you prefer a more tranquil breakfast experience, a cup of tea can be the ideal partner for your pancakes. The delicate, nuanced flavors of tea, whether it can gently accentuate the subtle sweetness of your pancakes without overwhelming your palate. The result? A serene and balanced breakfast affair. Do you not hunger for a satisfying breakfast or dinner?',
  },
];

// eslint-disable-next-line import/no-anonymous-default-export
export default { wines, cocktails, awards, blog, };
