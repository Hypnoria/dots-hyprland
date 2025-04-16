<script>
  // Esconder banner ao rolar
  const searchBanner = document.getElementById('searchBanner');
  let lastScroll = 0;
  
  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > lastScroll && currentScroll > 100) {
      // Rolando para baixo
      searchBanner.classList.add('hidden');
    } else {
      // Rolando para cima
      searchBanner.classList.remove('hidden');
    }
    
    lastScroll = currentScroll;
  });
</script>