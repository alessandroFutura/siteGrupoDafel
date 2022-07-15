$(document).ready(function(){ 
    renderProductsGroup();
});

const URI = '/grupodafel/';

function renderProductsGroup (){
    fetch(`${URI}data/products.json`)
    .then(response => {
    return response.json();
    })
    .then((data)=>{
    var Card = $('#grupo_de_produto');
    $('#grupo_de_produto').html('');
    Card.find('.portfolio-item').remove();
    data.forEach((group)=>{
        Card.append(`
            <div class="col-lg-4 col-md-6 col-sm-12 p-0 portfolio-item">
                <div class="position-relative overflow-hidden productsItemMargin">
                    <div class="portfolio-img">
                        <img class="img-fluid w-100" src="img/group/${group.cover}" alt="">
                    </div>
                    <div class="portfolio-text bg-primary-opacity">
                        <h4 class="font-weight-bold mb-4" style="text-align: center;">${group.title}</h4>
                        <div class="d-flex align-items-center justify-content-center">
                            <a class="btn btn-sm btn-secondary m-1" href="product.html?category=${group.id}">
                                Saiba Mais
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `);
    });
    });
  
  }