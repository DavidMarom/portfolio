var portData = [{
        id: "sokoban",
        name: "Sokoban",
        title: "Minesweeper",
        desc: "This game will blow your mind",
        url: "https://davidmarom.github.io/Minesweeper/",
        publishedAt: 1448693940000,
        labels: ["Matrixes", "keyboard events"],
    },
    {
        id: "sokoban",
        name: "Sokoban",
        title: "Better push those boxes",
        desc: "lorem ipsum lorem ipsum lorem ipsum",
        url: "projs/sokoban",
        publishedAt: 1448693940000,
        labels: ["Matrixes", "keyboard events"],
    },
    {
        id: "sokoban",
        name: "Sokoban",
        title: "Better push those boxes",
        desc: "lorem ipsum lorem ipsum lorem ipsum",
        url: "projs/sokoban",
        publishedAt: 1448693940000,
        labels: ["Matrixes", "keyboard events"],
    }



]



function renderPortGrid(portData) {
    var HTMLstr='<div class="row">';

    portData.map(function (obj,iDx) {

        HTMLstr += `<div class="col-md-4 col-sm-6 portfolio-item">
          <a class="portfolio-link" data-toggle="modal" href="${obj.url}">
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


    HTMLstr +=`</div>`
    document.querySelector('.port-grid').innerHTML = HTMLstr;
}