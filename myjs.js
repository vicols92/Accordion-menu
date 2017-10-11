document.addEventListener('DOMContentLoaded', function() {
  const acc = document.getElementsByClassName("expandButton");
  let i;

  for (i = 0; i < acc.length; i++) {
      acc[i].onclick = function(){
          let panel = this.nextElementSibling;
          if (panel.style.display === "block") {
              panel.style.display = "none";
              this.getElementsByTagName('span')[0].className = 'icon';
              this.style.backgroundColor = '#efefef';
          } else {
              panel.style.display = "block";
              this.getElementsByTagName('span')[0].className = 'iconOpen';
              this.style.backgroundColor = '#d4d2d2';

          }
      }
  }
}, false);
