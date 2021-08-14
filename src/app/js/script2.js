<script>
		 var slideIndeX = 1;
		 showDivs(slideIndeX);
		 function plusDivs(n) {
		 showDivs(slideIndeX += n);
		  }
		 function showDivs(n) {
		 var i;
		 var x = document.getElementsByClassName("mySlides");
		 if (n > x.length) {slideIndeX = 1} if (n < 1) {slideIndeX = x.length}for
		 (i = 0; i < x.length; i++) {x[i].style.display = "none";}
		 x[slideIndeX-1].style.display = "block"; }
</script>