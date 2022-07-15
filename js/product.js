const url = new URL(location.href);
var category = url.searchParams.get('category');
$(document).ready(function(){ 
    clearComponents();
    render();
});

var PageTop = $('#page_top');
var Products= $('#products'); 
const URI = '/grupodafel/';

function clearComponents (){
    $('#page_top').html('');
    $('#products').html('');
}

function render (){
    fetch(`${URI}data/products.json`)
    .then(response => {
        return response.json();
     })
     .then((res) => {
        res.forEach((data)=>{
            if(data.id == category){
                PageTop.append(`
                    <div class="mb-5">
                        <h1 class=" text-gray mb-3">${data.title}</h1>
                    </div>
                    <div class="mb-5">
                        <img id="image_page_product"  class="img-fluid  rounded w-100 mb-4" src="img/products/${data.category}/${data.image}" alt="Image">
                        <p style="text-align: center;">${data.description}</p>
                    </div>
                `);
                data.products.map((prod)=>{
                    Products.append(`
                        <div class="col-lg-3 col-md-6 col-sm-12 p-0 portfolio-item">
                            <div class="Item">
                                <img class="ImageItem" src="img/products/${data.category}/${prod.image}" alt="Image">
                                <div class="ItemFooter text-ellipsis">
                                    <span>${prod.name}</span>
                                </div>
                            </div>
                        </div>
                    `);
                });
                $('#product_title').html(`Produtos para ${data.title}`);
                $('#title_page').html(data.title);
                $('#page_name').html(data.title);
                $('#bannerProduct').css('background-image', `url('${URI}img/group/cover/${data.banner}')` );
            }            
        });
     });
}