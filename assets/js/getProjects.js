/**
* Returns an piece of HTML that can be used as a project
* @param {string} projectName Name of the project
* @param {string} projectUrl Url to the project
* @param {string} projectRepoUrl Url to the repo of the project
*/
const projectTemplate = function(projectName, projectUrl, projectRepoUrl){
  return `
  <div class="project">
    <h2>${projectName}</h2>
    <div class="links">
      <a href="${projectUrl}"><i class="fas fa-link"></i></a>
      <a href="${projectRepoUrl}"><i class="fab fa-github"></i></a>
    </div>
  </div>
  `
}

/**
* Write the project to the page
* @param {string} projectName Name of the project
* @param {string} projectUrl Url to the project
* @param {string} projectRepoUrl Url to the repo of the project
*/
const writeToPage = function(projectName, projectUrl, projectRepoUrl){
  const container = document.querySelector('#project-container');
  container.insertAdjacentHTML('beforeEnd', projectTemplate(projectName, projectUrl, projectRepoUrl));
}

/**
* Reads out all the existing projects from the json file.
*/
const getProjects = function(){
  fetch('assets/json/projects.json')
  .then(response => response.json())
  .then(function(data){
    for (var i = 0; i < data.projects.length; i++) {
      writeToPage(data.projects[i].name, data.projects[i].url, data.projects[i].repo);
    }
  });
}

getProjects();
