function renderListCarts() {
  const list_carts = document.getElementById('list_cart')
  const cart_empty = document.getElementById('list_cart-no-item')
  const carts = localStorage.getItem('carts') ? JSON.parse(localStorage.getItem('carts')) : []
  if (carts.length === 0) {
    cart_empty.style.display = 'flex'
    list_carts.style.display = 'none'
  }
  else {
    cart_empty.style.display = 'none'
    list_carts.style.display = 'block'
  }
  //render item cart
  const htmls_carts = carts.map((itemCart, index ,array) => {
    let productId = index
    index++;
    return `
    <!-- hình ảnh sản phẩm -->
    <div id="list_cart-info--wrap">
    <div id="info-product">
      <div id="list_cart-item--img">
        <img src="${itemCart.url_Product}" alt="">
      </div>
      <!-- tên,màu,giá -->
      <div id="list_cart-item--info">
        <div class="list_cart-item--info-name">
          <a href="" id="list_cart-item--info-name">
          ${itemCart.name_Product} | ${itemCart.status_Product}
          </a>
        </div>
        <div id="list_cart-item--info-priceAndColor">
          <i class='bx bxs-checkbox-checked icon-check--success'></i>
          <span id="item-color">${itemCart.color_Product}</span>|
          <span id="item-param">${itemCart.parameter_Product}</span>|
          <span id="item-price">${new Intl.NumberFormat().format(itemCart.price_Product)} VND</span>
        </div>
      </div>
    </div>
    <!-- add số lượng,xóa -->
    <div id="list_cart-item--info-handle">
      <input type="text" id="input-amount" placeholder="Nhập số lượng">
      <button id="remove-item" onclick = "removeItemCart(${productId})"><i class='bx bxs-trash'></i>Xóa</button>
      <div id="show-total">
        <label>Thành tiền :</label>
        <span id="show-total--price"> ${new Intl.NumberFormat().format(itemCart.price_Product)} VND</span>
      </div>
    </div>

    </div>

    `
  })
  list_carts.innerHTML = htmls_carts.join("")

  // tinh tong tien
  function total_all(){
  const total_html = document.getElementById('total_all')
  const total = carts.reduce((total,price) => {
    return total + parseInt(price.price_Product)
  },0)
  var totalAll = new Intl.NumberFormat().format(total)
  total_html.innerHTML = totalAll + ' VND'
}
  total_all()
 // tinh tong tien
}

// remove
function removeItemCart(id) {
  const carts = localStorage.getItem('carts') ? JSON.parse(localStorage.getItem('carts')) : []
  carts.splice(id,1)
  localStorage.setItem('carts', JSON.stringify(carts))
  alert('Xóa thành công')
  this.renderListCarts()

}




