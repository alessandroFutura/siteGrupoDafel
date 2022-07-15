const url = new URL(location.href);
var ID = url.searchParams.get('id');

$(document).ready(function(){ 
    renderPost();
});

function renderPost (){
    fetch('https://www.grupodafel.com.br/data/news.json')
    .then(response => {
       return response.json();
    })
    .then((data)=>{
       data.forEach((post)=> {
            if(post.id == ID){
                console.log(post)
                $('#title_post').html(post.title);
                $('.bannerPost').css("background-image", `url(https://www.grupodafel.com.br/img/blog/${post.image})`);
                $('#post_info').html(`${ post.type } | PUBLICADO EM ${post.day} - ${post.month} - ${post.year}`);
                $('#conteudo').html(post.description);
            }
       });
       console.log(data)
    });
 
 }
