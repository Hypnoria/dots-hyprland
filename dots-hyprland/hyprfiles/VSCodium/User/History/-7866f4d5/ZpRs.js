document.querySelectorAll('.operation-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      // Remove classe 'active' de todos os botões
      document.querySelectorAll('.operation-btn').forEach(b => {
        b.classList.remove('active');
      });
      
      // Adiciona classe 'active' apenas no botão clicado
      this.classList.add('active');
      
      // Aqui você pode adicionar a lógica de filtro
      const filterType = this.getAttribute('data-filter');
      filtrarImoveis(filterType); // Chama sua função de filtro
    });
  });
  
  // Exemplo de função de filtro
  function filtrarImoveis(tipo) {
    console.log(`Filtrando por: ${tipo}`);
    // Sua lógica de filtragem aqui
  }