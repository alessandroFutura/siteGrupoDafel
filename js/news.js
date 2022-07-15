$(document).ready(function(){ 
   renderNews();
});


function renderNews (){
   var URI = '/grupodafel/';
   fetch(`${URI}data/news.json`)
   .then(response => {
      return response.json();
   })
   .then((data)=>{
      var Card = $('#blog_news');
      $('#blog_news').html('');
      Card.find('.itemNews').remove();
      data.forEach((dat)=>{
         if(dat.isVisibleHome == 'Y'){
            Card.append(`
               <div class="col-lg-4 col-md-6 mb-5 itemNews">
                  <div class="position-relative mb-4">
                     <img class="img-post rounded w-100" src="${URI}img/blog/${dat.image}" alt="">
                     <div class="blog-date">
                        <h4 class="font-weight-bold mb-n1">${String(dat.day).padStart(2,'0')}</h4>
                        <small class="text-white text-uppercase">${dat.month}</small>
                     </div>
                  </div>
                  <div class="d-flex mb-2">
                     <span class="text-secondary text-uppercase font-weight-medium">${dat.type}</span>
                     <span class="text-primary px-2">|</span>
                     <span class="text-secondary text-uppercase font-weight-medium"> Publicado em ${dat.year}</span>
                  </div>
                  <h5 class="font-weight-medium mb-2 text-primary">${dat.title}</h5>
                  <p class="mb-4">${dat.shortDescription}</p>
                  <a style="color: #fff;" class="btn btn-sm btn-primary py-2" href="${URI}posts.html?id=${dat.id}&Titulo=${dat.title}">Leia Mais</a>
               </div>
            `);
         }
      });
      
   });

}