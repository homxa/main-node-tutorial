// Script for navigation bar
const closes = document.querySelector('.men');
const ul =  document.querySelector('nav ul');
const opened = document.querySelector('.open');
opened.addEventListener('click', ()=>{
  ul.classList.add('gett');
  if(ul.classList.contains('gett')){
    opened.style.display= 'none';

  }
});
closes.addEventListener('click',()=>{
ul.classList.remove('gett')
opened.style.display = 'block';
})
