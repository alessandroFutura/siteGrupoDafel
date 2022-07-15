$(document).ready(function(){ 
   renderCompany();
 });
 
 const URI = '/grupodafel/';

 function renderCompany (){
    fetch(`${URI}data/company.json`)
    .then(response => {
       return response.json();
    })
    .then((data)=>{
       var Card = $('#company');
       $('#company').html('');
       Card.find('.portfolio-item').remove();
       data.forEach((dat)=>{
          Card.append(`
            <div class="col-lg-4 col-md-6 col-sm-12 p-0 portfolio-item">
               <div class="position-relative overflow-hidden productsItemMargin">
                  <div class="portfolio-img divImageLoading">
                        <img class="img-company w-100 h-100" src="img/companies/${dat.image}" style="box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;">
                  </div>
                  <div class="portfolio-text bg-primary-opacity">
                        <h4 class="font-weight-bold mb-4">${dat.name}</h4>
                        <div class="d-flex align-items-center justify-content-center">
                           <a class="btn btn-sm btn-secondary m-1" href="${URI}company.html?Empresa=${dat.id}&Nome=${dat.name}">
                             Conhecer Unidade
                           </a>
                        </div>
                  </div>
               </div>
            </div>
          `);
       });
    });
 
 }