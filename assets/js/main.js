function renderListProduct() {
  const list_Products = document.getElementById('list_products')
  const products = localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : []
  // duyệt qua mảng
  const htmls = products.map((itemProduct, index) => {
    let set_productID = index
    index++
    return `
    <div id="product_item">
    <div class="product_item-img">
      <img src="${itemProduct.url_Product}"
        alt="${itemProduct.url_Product}" >
    </div>
    <div class="product_item-info">
      <a href="" class="product_item-info--name">
        ${itemProduct.name_Product} - HHMB${set_productID}
      </a>
      <span class="product_item-info--color">
        Màu sắc: ${itemProduct.color_Product}
      </span>
      <span class="product_item-info--parameter">
      Thông số: ${itemProduct.parameter_Product}
      </span>
      <span class="product_item-info--price">
      ${new Intl.NumberFormat().format(itemProduct.price_Product)} VND
      </span>

    </div>
    <div class="product_item-handle">
      <div class="product_item-handle--rate">
        <i class='bx bxs-star icon_star-fill'></i>
        <i class='bx bxs-star icon_star-fill'></i>
        <i class='bx bxs-star icon_star-fill'></i>
        <i class='bx bxs-star icon_star-fill'></i>
        <i class='bx bxs-star icon_star-empty'></i>
      </div>
      <div class="product_item-handle--like" onclick = "click_like(${set_productID})">
        <i class='bx bxs-heart'></i>
      </div>
    </div>
    <div id="btn-handle">
      <button id="btn-detail" type="button" onclick = "click_viewDetails(${set_productID})">
        <a href="detail.html">Xem chi tiết</a>
      </button>
      <button id="btn-add-cart" type="button" onclick = "click_viewCarts(${set_productID})">
        <a href="#@@@">Thêm vào giỏ hàng</a>
      </button>
    </div>
  </div>
    `
  })
  list_Products.innerHTML = htmls.join('')
}
function click_like(id) {
    //querySelector All lấy tất cả các selector có id đó
  //còn queryselector k thì n chỉ lấy cái id xuất hiện đầu tiên mà thôi
  var like_handle = document.querySelectorAll(".product_item-handle--like")
  // console.log(like_handle[id])
  like_handle[id].classList.toggle('active');
}
// xem chi tiết  khi click vào 1 spham bat ki / render bên detail.js từ localstorage ra view
function click_viewDetails(id) {
  // lấy dc thông tin sản phẩm 1 khi click nút xem chi tiết
  const products = localStorage.getItem('products') ?
    JSON.parse(localStorage.getItem('products')) : []
  const getProduct = products[id]
  // đẩy thông tin sap lấy dc vào key details trong localstorage
  const details = localStorage.getItem('details') ?
    JSON.parse(localStorage.getItem('details')) : [];
  details.splice(0, 1);
  //  chỉ nhận 1 spham / key nên phải cắt đi spham cũ và push lại sản phẩm mới
  details.push(getProduct)
  localStorage.setItem('details', JSON.stringify(details))
  //  this.renderListDetails()
}


function click_viewCarts(id) {
  // lấy dc thông tin sản phẩm 1 khi click nút đưa vào giỏ hàng
    const products = localStorage.getItem('products') ?
    JSON.parse(localStorage.getItem('products')) : []
    const getProduct = products[id]

  // đẩy thông tin san pham lấy dc vào key carts trong localstorage
    const carts = localStorage.getItem('carts') ?
    JSON.parse(localStorage.getItem('carts')) : [];
    carts.push(getProduct)
    //dem so luong sp
    function countItem_Carts(){
    const carts_length = carts.length
    const count_html = document.getElementById('cart_item--amount')
    count_html.innerHTML = carts.length
    localStorage.setItem('carts', JSON.stringify(carts))
  }
   countItem_Carts()
}


