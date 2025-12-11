import axios from "axios";

// Function fetch data via api
export function getProducts(callback) {
  axios
    .get("https://fakestoreapi.com/products")
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      console.error(err);
    });
}
