export default function calcTotalPrice(cart) {
  console.log(cart);
  return cart.reduce((tally, cartItem) => {
    if (!cartItem.product) return tally; // products can be deleted, but they could still be in your cart
    // I added *100 because order total is 2 decimal places out
    return (tally + cartItem.quantity * cartItem.product.price) * 100;
  }, 0);
}
