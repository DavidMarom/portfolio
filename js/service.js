var portData = [{
    id: "sokoban",
    name: "Sokoban",
    title: "Minesweeper",
    desc: "This game will blow your mind... and legs...",
    url: "https://davidmarom.github.io/Minesweeper/",
    publishedAt: 1448693940000,
    labels: ["a", "b"],
  },
  {
    id: "b",
    name: "b",
    title: "Bookshop ERP",
    desc: "Books inventory management system",
    url: "https://davidmarom.github.io/book-shop-erp/",
    publishedAt: 1448693940000,
    labels: ["Matrixes", "keyboard events"],
  },
  {
    id: "c",
    name: "c",
    title: "Better push those boxes",
    desc: "lorem ipsum lorem ipsum lorem ipsum",
    url: "#",
    publishedAt: 1448693940000,
    labels: ["Matrixes", "keyboard events"],
  }
]

function renderPortGrid(portData) {
  var HTMLstr = '<div class="row">';

  portData.map(function (obj, iDx) {

    HTMLstr += `<div class="col-md-4 col-sm-6 portfolio-item">
          <a class="portfolio-link" data-toggle="modal" href="#portfolioModal${iDx+1}">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fa fa-plus fa-3x"></i>
              </div>
            </div>
            <img class="img-fluid" src="img/portfolio/0${iDx+1}-thumbnail.jpg" alt="">
          </a>
          <div class="portfolio-caption">
            <h4>${obj.title}</h4>
            <p class="text-muted">${obj.desc}</p>
          </div>
        </div>`;
  });


  HTMLstr += `</div>`
  document.querySelector('.port-grid').innerHTML = HTMLstr;
}

function renderModals(portData) {
  var HTMLstr = '';

  portData.map(function (obj, iDx) {

    HTMLstr += `<div class="portfolio-modal modal fade" id="portfolioModal${iDx+1}" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="close-modal" data-dismiss="modal">
          <div class="lr">
            <div class="rl"></div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 mx-auto">
              <div class="modal-body">
                <!-- Project Details Go Here -->
                <h2>${obj.title}</h2>
                <p class="item-intro text-muted">${obj.desc}</p>
                <a href="${obj.url}" target=_blank"><img class="img-fluid d-block mx-auto" src="img/portfolio/0${iDx+1}-full.jpg" alt="${obj.title}"></a>
                <p></p>
                
                <button class="btn btn-primary" data-dismiss="modal" type="button">
                    <i class="fa fa-times"></i>
                    Close Project</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`
  });

  document.querySelector('.modal-load').innerHTML = HTMLstr;

}

function sendMail() {

  subEl = document.querySelector('#input-subject').value;
  messEl = document.querySelector('#input-message').value;

  var hrefStr = `https://mail.google.com/mail/?view=cm&fs=1&to=davidmarom.pro@gmail.com&su=${subEl}&body=${messEl}`;
  window.open(hrefStr, '_blank');
  
}