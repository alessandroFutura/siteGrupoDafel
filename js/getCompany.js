const url = new URL(location.href);

$(document).ready(function(){ 
    clearComponents();
    render();
});

var Card = $('#video');
var Company = $('#company');
var Gallery = $('#gallery'); 
var Group = $('#icons_products_group');

var companyId = url.searchParams.get('Empresa');


function clearComponents (){
    $('#company').html('');
    Company.find('.itemNews').remove();
    
    $('#gallery').html('');
    Gallery.find('.portfolio-item').remove();

    $('#video').html('');
    Gallery.find('.row').remove();

    $('#icons_products_group').html('');
    Card.find('.Icon').remove();
}

function render (){
    const URI = '/grupodafel/';
    fetch(`${URI}data/Companies.json`) 
    .then(response => {
        return response.json();
     })
     .then((res) => {
        res.forEach((data)=>{
            if(data.id == companyId){
                Company.append(`
                    <div class="row">
                        <div class="col-lg-5">
                            <div class="row d-flex flex-column align-items-center justify-content-center h-100 py-5 px-3">
                                <img style="box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;" class="img-fluid w-100 h-100" src="img/companies/${data.image}" alt="">
                            </div>
                        </div>
                        <div class="col-lg-7 pt-5 pb-lg-5">
                            <h6 class="text-secondary font-weight-semi-bold text-uppercase mb-3">Desde de ${data.year}</h6>
                            <h1 class="mb-4 text-primary">${data.name}</h1>
                            <p>${data.text}</p>
                            <p><i class="fa fa-map-marker text-primary mr-2"></i>${data.address}</p>
                            <p><i class="fa fa-clock text-primary mr-2"></i>${data.openingHours}</p>
                            <p><i class="fa fa-phone text-primary mr-2"></i>${data.phone}</p>
                        </div>
                    <div/>
                `);
                data.gallery.map((img)=>{
                    if(data.id == companyId){
                        Gallery.append(`
                            <div class="col-lg-4 col-md-6 col-sm-12 p-0 portfolio-item ">
                                <div class="position-relative overflow-hidden" style="margin: 2px;">
                                <div class="portfolio-img">
                                        <img style="box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; !important" class="img-fluid w-100" src="img/companies/gallery/${data.id}/${img.image}" alt="">
                                    </div>
                                </div>
                            </div>
                        `);
                    }
                });
                data.video.map((video)=>{
                    Card.append(`
                        <div style=" display: flex; flex-wrap: wrap;" class="">
                            <div class="col-lg-5">
                                <div id="video_company"  class="d-flex flex-column align-items-center justify-content-center rounded h-100 py-5 px-3">
                                <iframe id="vd_home" style="position: absolute !important; width: 100% !important; height: 100% !important; z-index: 100" src="https://www.youtube.com/embed/${video.id}?enablejsapi=0&amp;autoplay=0&amp;modestbranding=1&amp;controls=0&amp;showinfo=0&amp;rel=0&amp;hd=1&amp;wmode=transparent&amp;enablejsapi=0" frameborder="0" allowfullscreen=""></iframe> 
                                </div>
                            </div>
                            <div class="col-lg-7 pt-5 pb-lg-5">
                                <h6 class="text-primary font-weight-semi-bold text-uppercase mb-3">SAIBA MAIS SOBRE NÓS</h6>
                                <h1 class="mb-4 text-gray">${video.title}</h1>
                                <p>${video.text}</p>
                            </div>
                        </div>
                    `);
                });
                if(data.gallery.length > 6){
                    $('#group_galery').addClass('margemGaleria');
                }
                if(data.gallery.length > 13){
                    $('#group_galery').addClass('margemGaleria14');
                }
                $('#title_page_company').html(data.name);
                $('#page_name').html(data.name);
                $('#cover_company').css('background-image', `url('${URI}img/companies/cover/${data.banner}')` );
            }            
        });
     });
}
