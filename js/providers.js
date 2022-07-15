$(document).ready(function(){ 
    renderProviders();
 });
 const URI = '/grupodafel/';

 function renderProviders (){
    fetch(`${URI}data/providers.json`)
    .then(response => {
       return response.json();
    })
    .then((data)=>{
       var Card = $('#provider_container');
       $('#provider_container').html('');
       Card.find('.portfolio-item').remove();
       data.forEach((dat)=>{
          Card.append(`
            <div class="col-lg-4 col-md-6 col-sm-12 p-0 portfolio-item ">
                <div class="position-relative overflow-hidden">
                    <div class="portfolio-img">
                        <img class="img-provider" src="img/proividers/${dat.logo}" alt="">
                    </div>
                </div>
            </div>
          `);
       });
    });
 
 }