
// render lên table đê quản lý
function renderTableProduct() {
    const table_products = document.getElementById('table_products')
    const products = localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : []
    if(products.length === 0)
    {
        document.getElementById('table_products').style.display = 'none'
    }
    else{
        document.getElementById('table_products').style.display = 'block'
    }
    //
    var table_title = ` <tr id="table_title">
    <th>ID sản phẩm</th>
    <th>Tên sản phẩm</th>
    <th>Giá</th>
    <th>Thông số kỹ thuật</th>
    <th>Tình trạng sản phẩm</th>
    <th>Màu sắc</th>
    <th>Danh mục</th>
    <th>Mô tả</th>
    <th>URL hình ảnh (600 x 600) x URL Thumbnails</th>
    <th>URL Video</th>
    <th colspan="2">Thao tác</th>
  </tr>`
    products.forEach((itemProduct,index) => {
        let productId = index
        index++;
       table_title+= `
        <tr>
        <td>HHMB${productId}</td>
        <td>${itemProduct.name_Product}</td>
        <td>${itemProduct.price_Product} VND</td>
        <td>${itemProduct.parameter_Product}</td>
        <td>${itemProduct.status_Product} </td>
        <td>${itemProduct.color_Product}</td>
        <td>${itemProduct.category_Product} </td>
        <td>${itemProduct.desc_Product}</td>
        <td>URL ảnh chính : ${itemProduct.url_Product} <br>
        URL ảnh thumbnails : <br>
        1.${itemProduct.url_Thumb1} <br>
        2.${itemProduct.url_Thumb1}<br>
        3.${itemProduct.url_Thumb1}<br>
        4.${itemProduct.url_Thumb1}<br>
        5.${itemProduct.url_Thumb1} </td>
        <td>https://www.youtube.com/embed/${itemProduct.ID_Video} </td>
        <td><button id="admin_remove-item" onclick = "removeProduct(${productId})"><i class='bx bxs-trash'></i>Xóa</button> </td>
        <td><button id="admin_edit-item" ><i class='bx bx-edit' ></i>Cập nhật</button></td>
        </tr>`
    })
        table_products.innerHTML = table_title
}
// get value input
function save() {
    const $ = document.querySelector.bind(document);
    const $$ = document.querySelectorAll.bind(document);
    //
    const name_product = $('#input_name-product').value
    const price_product = $('#input_price-product').value
    const parameter_product = $('#input_parameter-product').value
    const desc_product = $('#input_desc-product').value
    const url_product = $('#input_url-product').value
    const color_product = $('#input_color-product').value
    const category_product = $('#input_category-product').value
    const url_thumb1 = $('#input_url-thumb1-product').value
    const url_thumb2 = $('#input_url-thumb2-product').value
    const url_thumb3 = $('#input_url-thumb3-product').value
    const url_thumb4 = $('#input_url-thumb4-product').value
    const url_thumb5 = $('#input_url-thumb5-product').value
    const status_product = $('#input_status-product').value
    const url_video = $('#input_url-video-product').value
    const errorName = $('#errorName')
    const errorPrice = $('#errorPrice')
    const errorParameter = $('#errorParameter')
    const errorDesc = $('#errorDesc')
    const errorUrl = $('#errorUrl')
    const btn_create = $('#btn_create-product')

    //lấy ID video youtube : link video = url_video
    const url_start_slice = parseInt(url_video.indexOf('=')) + 1
    // lấy index từ dấu bằng,bởi vì mình k cắt dấu bằng mà chỉ cắt từ
    //phía sau nó nên parseInt + thêm 1
    // lấy index cuối url, vì mình căt từ dấu = tới cuối chuỗi để getID
    const url_end_slice = url_video.length
    // slice(start,end)
    const ID_video = url_video.slice(url_start_slice,url_end_slice);
     //lấy ID video youtube

    // Kiểm tra đã có giá trị và push vào cái mảng
    if (name_product && price_product && parameter_product && desc_product && url_product && color_product && category_product && status_product && ID_video) {
        const products = localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : []
        products.push({
            name_Product: name_product,
            price_Product: price_product,
            parameter_Product: parameter_product,
            desc_Product: desc_product,
            url_Product: url_product,
            color_Product: color_product,
            category_Product: category_product,
            url_Thumb1 : url_thumb1,
            url_Thumb2 : url_thumb2,
            url_Thumb3: url_thumb3,
            url_Thumb4 : url_thumb4,
            url_Thumb5 : url_thumb5,
            status_Product : status_product,
            ID_Video : ID_video,
        })
        localStorage.setItem('products', JSON.stringify(products))
        alert('Tạo thành công')
        location.reload(true)
        this.renderTableProduct()
        this.renderListProduct()
        // list này bên file index
    }
// check error
    if (_.isEmpty(name_product)) {
        errorName.innerHTML = ('Vui lòng không để trống trường này.')
    } else {
        errorName.innerHTML = ""
    }
    if (_.isEmpty(price_product)) {
        errorPrice.innerHTML = ('Vui lòng không để trống trường này.')
    } else {
        errorPrice.innerHTML = ""
    }
    if (_.isEmpty(parameter_product)) {
        errorParameter.innerHTML = ('Vui lòng không để trống trường này.')
    } else {
        errorParameter.innerHTML = ""
    }
    if (_.isEmpty(desc_product)) {
        errorDesc.innerHTML = ('Vui lòng không để trống trường này.')
    } else {
        errorDesc.innerHTML = ""
    }
    if (_.isEmpty(url_product)) {
        errorUrl.innerHTML = ('Vui lòng không để trống trường này.')
    } else {
        errorUrl.innerHTML = ""
    }
// check error
}
//remove
function removeProduct(id){
    const products = localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : []
    products.splice(id,1)
    localStorage.setItem('products', JSON.stringify(products))
    alert('Xóa thành công')
    this.renderTableProduct()
}