const managerHtml = (ele) => `
  <div class="col s12 l4 m6">
    <div class="card blue darken-1">
      <div class="card-content white-text">
        <span class="card-title">${ele.name}</span>
        <span class="card-title">Manager</span>
        <ul class="collection">
          <li class="collection-item grey darken-1">Id: ${ele.id}</li>
          <li class="collection-item grey darken-1">Email: <a href="${ele.email}">${ele.email}</a></li>
          <li class="collection-item grey darken-1">Office Number: ${ele.officeNumber}</li>
        </ul>
      </div>
    </div>
  </div>
  `
;

module.exports = managerHtml;

