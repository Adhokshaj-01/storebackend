// Coffee: price_1LnUTFDM1jwCEz8OGoOSXiSM
// Sunglasses: price_1LnUTxDM1jwCEz8OAqHYTwKQ
// Camera: price_1LnUUoDM1jwCEz8OvxIcJ7to

const productsArray = [
  {
    id: "price_1Mcu93SAyg8jQ6b09heCQeKY",
    title: "Black Hoodie",
    price: 29.99,
    img: "Eureka.png",
  },
  {
    id: "price_1Mcu7ZSAyg8jQ6b0eY5sxqbq",
    title: "Full Sleeves T-Shirt",
    price: 15.99,
    img: "Eureka (1).png",
  },
  {
    id: "price_1Mcu4PSAyg8jQ6b0oezcrX87",
    title: "T-Shirt",
    price: 12.99,
    img: "Eureka (2).png",
  },
  {
    id: "price_1MpSc2SAyg8jQ6b0zAAYf9Aa",
    title: "Eureka Sipper",
    price: 49.99,
    img: "sipper.jpg",
  },
  {
    id: "price_1MkNotSAyg8jQ6b0zt4u3Fo5",
    title: "Eureka coffee mug",
    price: 11.99,
    img: "cup.png",
  },
  {
    id: "price_1MkNmRSAyg8jQ6b0HdeasRyQ",
    title: "Eureka cap",
    price: 17.99,
    img: "cap.png",
  },
  {
    id: "price_1MkOPASAyg8jQ6b0HjslUUya",
    title: "Declare Varibale Not War",
    price: 1.99,
    img: "stick3.jpg",
  },
  {
    id: "price_1MkOO7SAyg8jQ6b0aJv7sAA0",
    title: "Programming Is Thinking Not Typing",
    price: 1.99,
    img: "stick2.jpg",
  },
  {
    id: "price_1MkOMhSAyg8jQ6b0Zjiu9MgM",
    title: "It's Not A Bug It,s A Feature",
    price: 1.99,
    img: "stick1.jpg",
  },
];

function getProductData(id) {
  let productData = productsArray.find((product) => product.id === id);

  if (productData == undefined) {
    console.log("Product data does not exist for ID: " + id);
    return undefined;
  }

  return productData;
}

export { productsArray, getProductData };
