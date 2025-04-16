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
      coursesList.appendChild(li);
    });
  }
  
  function loadVideos(course) {
    // Exibir vídeos associados ao curso
    document.getElementById('course-title').textContent = course.name;
    
    const videosList = document.getElementById('videos-list');
    videosList.innerHTML = ''; // Limpar vídeos antes de adicionar novos
  
    course.videos.forEach(video => {
      const div = document.createElement('div');
      div.classList.add('video-item');
      div.textContent = video;
      videosList.appendChild(div);
    });
  }
  
  function getCoursesFromLocalStorage() {
    // Simula o carregamento de cursos (pode ser adaptado para carregar do backend)
    return JSON.parse(localStorage.getItem('courses')) || [];
  }
  
  function addCourse(courseName) {
    const courses = getCoursesFromLocalStorage();
    
    const newCourse = {
      name: courseName,
      videos: [] // Inicia com um array vazio de vídeos
    };
  
    courses.push(newCourse);
    localStorage.setItem('courses', JSON.stringify(courses));
  
    loadCourses();
  }
  