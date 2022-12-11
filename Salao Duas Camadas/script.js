var heart = document.querySelectorAll('.salao');
                  
document.addEventListener('click', function(e){
  var classHeart = e.target.classList;
  if(!classHeart.contains('ativo')){
    heart.forEach(function(heart){
      heart.classList.remove('ativo');
    });
    classHeart.add('ativo');
    console.log(e.target.getAttribute('data-avaliacao'));
  }
});