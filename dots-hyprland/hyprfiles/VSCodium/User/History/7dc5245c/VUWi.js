document.addEventListener('DOMContentLoaded', () => {
    loadCourses();
    
    // Evento para criar um novo curso
    document.getElementById('add-course-btn').addEventListener('click', () => {
      const courseName = prompt("Digite o nome do novo curso:");
      if (courseName) {
        addCourse(courseName);
      }
    });
  });
  
  function loadCourses() {
    // Carregar cursos do backend ou de um arquivo local
    const courses = getCoursesFromLocalStorage();
    const coursesList = document.getElementById('courses-list');
    
    coursesList.innerHTML = ''; // Limpar lista antes de adicionar novos itens
  
    courses.forEach(course => {
      const li = document.createElement('li');
      li.textContent = course.name;
      li.onclick = () => loadVideos(course);
      courses
  