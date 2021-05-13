const title = document.querySelector('#title');

function handleResize(e){
  console.log(e);
}

window.addEventListener('resize', handleResize);

title.addEventListener('click', function(){
  console.log('hello');
});