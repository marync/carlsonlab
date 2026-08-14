(function(){
  var toggle = document.querySelector('.nav-toggle');
  var menu = document.getElementById('nav-links');
  if(toggle && menu){
    toggle.addEventListener('click', function(){
      var open = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
  }
  var y = document.getElementById('year');
  if(y){ y.textContent = new Date().getFullYear(); }
})();
