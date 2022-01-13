const parentElement = document.querySelector('#buyItem');
const cartTotalItem = document.querySelector('#cartTotalItem');
const addToCart = document.querySelector('.add-to-cart');
const clear = document.querySelector('.delete');

const deleteItem = () => {
  clear.addEventListener('click', () => {
      document.querySelector('.check-out').classList.add('hidden');
      parentElement.innerHTML = '<h4 class="text-center">Your cart is empty</h4>';
      cartTotalItem.innerHTML = "";
  });
}

addToCart.addEventListener('click', () => {
  parentElement.innerHTML = `<li class="d-flex justify-content-between">
  <img src="images/image-product-1-thumbnail.jpg" alt="">
  <div class="my-auto">
    <h5>Fall Limited Edition Sneakers</h5>
    <p class="unit-price">$125.00 x 3 <span class="total-price">$375.00</span></p>
  </div>
  <button type="button" class="btn delete"><img src="images/icon-delete.svg" alt=""></button>
  </li>`;

  parentElement;
  deleteItem();
});
