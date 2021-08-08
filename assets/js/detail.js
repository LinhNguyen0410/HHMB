// render list detail
function renderListDetails(){
  const detail_wrap = document.getElementById('detail_wrap')
  const video_product = document.getElementById('video_product')
  const details = localStorage.getItem('details') ? JSON.parse(localStorage.getItem('details')) : []

  const htmls_details = details.map((productDetail,index) => {
    return `
    <div class="detail_wrap-column1">
    <!-- hình ảnh chính -->
    <div class="detail_product-img">
      <img src="${productDetail.url_Product}" alt="" id="detail_product-img">
    </div>
    <!-- toolbar -->
    <div class="detail_box-toolbar">
      <div class="detail_box-toolbar--item">
        <i class='bx bx-layer-plus'></i>
        <a href="">Cấu hình</a>
      </div>
      <div class="detail_box-toolbar--item">
        <i class='bx bx-camera-movie'></i>
        <a href="">Video</a>
      </div>
      <div class="detail_box-toolbar--item">
        <i class='bx bxs-file-pdf'></i>
        <a href="">Tin tức</a>
      </div>
      <div class="detail_box-toolbar--item">
        <i class='bx bx-message-rounded'></i>
        <a href="">Đánh giá</a>
      </div>
    </div>
    <!-- thumb-img -->
    <div class ="thumb-img">
      <img
        src="${productDetail.url_Thumb1}"
        alt="" onclick="changeImage(1)" id = "1">
      <img
        src="${productDetail.url_Thumb2}"
        alt=""onclick="changeImage(2)" id = "2">
      <img
        src="${productDetail.url_Thumb3}"
        alt=""onclick="changeImage(3)" id = "3">
      <img
        src="${productDetail.url_Thumb4}"
        alt=""onclick="changeImage(4)" id = "4">
      <img
        src="${productDetail.url_Thumb5}"
        alt=""onclick="changeImage(5)" id = "5">
    </div>
    <!-- note -->
    <div class="detail_note-clickOnImage">
      <p><i class='bx bx-search-alt'></i>Click vào ảnh để xem thực tế của sản phẩm</p>
    </div>
  </div>
  <div class="detail_wrap-column2">
    <img src="./assets/img/banner/logo.png" alt="" style="width:100px;margin-bottom: 20px;">
    <div id="detail_product-name">
      <h5>${productDetail.name_Product} ${productDetail.status_Product}</h5>
    </div>
    <div id="detail_product-price">
      <span>${new Intl.NumberFormat().format(productDetail.price_Product)} VND</span>
    </div>
    <div class="seperate"></div>
    <div id="detail_product-parameter">Bộ nhớ :
    ${productDetail.parameter_Product}
    </div>
    <div id="detail_product-color">
      Màu sắc : ${productDetail.color_Product}
    </div>
    <div id="detail_product-status">
      Tình trạng : ${productDetail.status_Product}
    </div>
    <div class="" id="detail_product-desc">
      <p class="desc-detail">${productDetail.desc_Product} </p>
    </div>
    <div class="detail_product-btn--buyNow">
      <button>Mua Ngay</button>
    </div>
    <div class="seperate"></div>
  </div>
  <div class="detail_wrap-column3">
    <div class="box_address-store">
      <h5>Địa chỉ mua hàng</h5>
      <div class="item-address">
      <h6>TP.Hồ Chí Minh</h6>
      <span>Địa chỉ 1 : 27 Lê Văn Việt, Hiệp Phú, Q.9</span>
      <span> Sđt: 0966.295.295 hoặc 0934.060.080</span>
      </div>
      <div class="item-address">
        <span>Địa chỉ 2 : 174 Cao Thắng, P.11, Q.10</span>
        <span>Sđt: 0938.060.080</span>
      </div>

    </div>
    <div class="box_regulations-store">
      <div class="box_regulations-store--item">
        <i class='bx bx-gift'></i>
        <span>Bộ sản phẩm bao gồm: Thân máy, cây lấy sim</span>
      </div>
      <div class="box_regulations-store--item">
        <i class='bx bx-timer' ></i>
        <span>Qui định đổi trả: 30 ngày với sản phẩm lỗi</span>
      </div>
      <div class="box_regulations-store--item">
        <i class='bx bx-analyse'></i>
        <span>Bảo hành 6 tháng</span>
      </div>
      <div class="box_regulations-store--item">
        <i class='bx bxl-codepen'></i>
        <span>Tình trạng máy 99% | Full Box</span>
      </div>
    </div>
  </div>
    `
  })
  detail_wrap.innerHTML = htmls_details
// render video
  const video_htmls = details.map((productDetail,index) =>
  {
    return `
    <iframe  src="https://www.youtube.com/embed/${productDetail.ID_Video}">
    </iframe>
    `
  })
  video_product.innerHTML = video_htmls
}
// render video
// change Image when clicked thumb image
function changeImage(id){
  let sourceImageThumb = document.getElementById(id).getAttribute('src');
  let imageMain = document.getElementById('detail_product-img').src = sourceImageThumb;
  // sau khi lấy dc cái source của thumb thì gán nó lại cho cái source của ảnh chính
}
// change Image when clicked thumb image
