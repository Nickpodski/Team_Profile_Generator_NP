const internHtml = (ele) => `
    <div class="col s12 l4 m6">
      <div class="card blue darken-1">
        <div class="card-content white-text">
          <span class="card-title">${ele.name}</span>
          <span class="card-title">Intern</span>
          <ul class="collection">
            <li class="collection-item grey darken-1">Id: ${ele.id}</li>
            <li class="collection-item grey darken-1">Email: <a href="mailto:${ele.email}">${ele.email}</a></li>
            <li class="collection-item grey darken-1">School: ${ele.school}</a></li>
          </ul>
        </div>
      </div>
    </div>
    `
;

module.exports = internHtml;