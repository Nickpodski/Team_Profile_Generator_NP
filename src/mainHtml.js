const mainHtml = (cards) => `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <title>My Team</title>
  </head>
  <body>
    <nav>
      <div class="nav-wrapper blue darken-1">
        <a href="#" class="brand-logo center">My Team</a>
      </div>
    </nav>
  
    <div class="container">
      <div class="row">
        ${cards}
      </div>  
    </div>
      
    </div>
  
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
  </body>
  </html>
  `
;

module.exports = mainHtml;