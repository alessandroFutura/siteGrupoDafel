$(document).ready(function(){ 
    renderIcons();
 });
 const URI = '/grupodafel/';

 function renderIcons (){
    fetch(`${URI}data/icons.json`)
    .then(response => {
       return response.json();
    })
    .then((data)=>{
       var Card = $('#icons_products_group');
       $('#icons_products_group').html('');
       Card.find('.Icon').remove();
       data.forEach((dat)=>{
        Card.append(`
            <a class="Icon"  href="product.html?category=${dat.category}">
                <div class="position-relative overflow-hidden">
                    <div class="portfolio-img">
                        <img class="icon-fluid" src="img/products_icons/${dat.icon}" alt="">
                    </div>
                </div>
            </a>
        `);
        Card.find('.Icon').tooltip({ title: `${dat.label}` });
       });
    });
 
 }