class MyDate {
    constructor() {
        this.days();
    }

    days() {
        const dateFirst = "2021-08-02";
        const diffInMS = new Date() - new Date(dateFirst);
        const days = diffInMS / (1000 * 60 * 60 * 24);
        const date = document.querySelector('.date');
        date.innerText = Math.trunc(days) + " Dias"
    }
}

const myDate = new MyDate();

class Carousel {
    constructor() {
        this.carousel();
    }

    carousel() {
        const btnSArrowLeft = document.getElementById('btn-study-left');
        const btnSArrowRight = document.getElementById('btn-study-right');
        const btnEArrowLeft = document.getElementById('btn-experiences-left');
        const btnEArrowRight = document.getElementById('btn-experiences-right');
        const articles = document.querySelector('.articles-study');
        const articlesE = document.querySelector('.articles-experiences');
        const numberOfArticles = articles.children.length;
        const numberOfArticlesE = articlesE.children.length;
        let auxCarouselStudy = 1;
        let auxCarouselExperiences = 1;
        articles.style.width = `calc(100% * ${numberOfArticles})`;
        articlesE.style.width = `calc(100% * ${numberOfArticlesE})`;
        if (auxCarouselStudy === 1) {
            btnSArrowLeft.style.visibility = 'hidden';
        }

        btnSArrowRight.addEventListener('click', e => {
            articles.style.transform = `translate(calc((-100% / ${numberOfArticles}) * ${auxCarouselStudy}))`
            if (auxCarouselStudy <= (numberOfArticles + 1) || auxCarouselStudy >= 1) {
                auxCarouselStudy++;
            }
            if (auxCarouselStudy !== 1) {
                btnSArrowLeft.style.visibility = 'visible';
            }
            if (auxCarouselStudy === numberOfArticles) {
                btnSArrowRight.style.visibility = 'hidden';
            }
            switch (auxCarouselStudy) {
                case 1: articles.style.transform = `translate(0)`;
                    break;
                case 2: articles.style.transform = `translate(calc((-100% / ${numberOfArticles})))`;
                    break;
                case 3: articles.style.transform = `translate(calc((-100% / ${numberOfArticles}) * 2))`;
                    break;
                case 4: articles.style.transform = `translate(calc((-100% / ${numberOfArticles}) * 3))`;
                    break;
            }
        });

        btnSArrowLeft.addEventListener('click', e => {
            if (auxCarouselStudy <= (numberOfArticles + 1) || auxCarouselStudy >= 1) {
                auxCarouselStudy--;
            }
            if (auxCarouselStudy === 1) {
                btnSArrowLeft.style.visibility = 'hidden';
            }
            if (auxCarouselStudy !== (numberOfArticles + 1)) {
                btnSArrowRight.style.visibility = 'visible';
            }

            switch (auxCarouselStudy) {
                case 4: articles.style.transform = `translate(calc((-100% / ${numberOfArticles}) * 3))`;
                    break;
                case 3: articles.style.transform = `translate(calc((-100% / ${numberOfArticles}) * 2))`;
                    break;
                case 2: articles.style.transform = `translate(calc((-100% / ${numberOfArticles})))`;
                    break;
                case 1: articles.style.transform = `translate(0)`;
                    break;
            }

        });

        if (auxCarouselExperiences === 1) {
            btnEArrowLeft.style.visibility = 'hidden';
        }

        btnEArrowRight.addEventListener('click', e => {
            articlesE.style.transform = `translate(calc((-100% / ${numberOfArticlesE}) * ${auxCarouselExperiences}))`
            if (auxCarouselExperiences <= (numberOfArticlesE + 1) || auxCarouselExperiences >= 1) {
                auxCarouselExperiences++;
            }
            if (auxCarouselExperiences !== 1) {
                btnEArrowLeft.style.visibility = 'visible';
            }
            if (auxCarouselExperiences === numberOfArticlesE) {
                btnEArrowRight.style.visibility = 'hidden';
            }
            switch (auxCarouselExperiences) {
                case 1: articlesE.style.transform = `translate(0)`;
                    break;
                case 2: articlesE.style.transform = `translate(calc((-100% / ${numberOfArticlesE})))`;
                    break;
                case 3: articlesE.style.transform = `translate(calc((-100% / ${numberOfArticlesE}) * 2))`;
                    break;
                case 4: articlesE.style.transform = `translate(calc((-100% / ${numberOfArticlesE}) * 3))`;
                    break;
            }
        });

        btnEArrowLeft.addEventListener('click', e => {
            if (auxCarouselExperiences <= (numberOfArticlesE + 1) || auxCarouselExperiences >= 1) {
                auxCarouselExperiences--;
            }
            if (auxCarouselExperiences === 1) {
                btnEArrowLeft.style.visibility = 'hidden';
            }
            if (auxCarouselExperiences !== (numberOfArticles + 1)) {
                btnEArrowRight.style.visibility = 'visible';
            }

            switch (auxCarouselExperiences) {
                case 4: articlesE.style.transform = `translate(calc((-100% / ${numberOfArticles}) * 3))`;
                    break;
                case 3: articlesE.style.transform = `translate(calc((-100% / ${numberOfArticles}) * 2))`;
                    break;
                case 2: articlesE.style.transform = `translate(calc((-100% / ${numberOfArticles})))`;
                    break;
                case 1: articlesE.style.transform = `translate(0)`;
                    break;
            }

        });


    }
}

const slide = new Carousel();

class Projects {
    constructor() {
        this.project();
    }

    project() {
        const viewProj = document.querySelector('.view-project');
        const descProj = document.querySelector('.description-project');

                document.addEventListener('click', e => {
            const el = e.target;
            if (el.id === "ta-na-mao") {
                viewProj.innerText = "";
                 descProj.innerText = "";
                 descProj.innerText = "T?? na m??o: P??gina Web que hospeda an??ncios locais, atendendo inicialmente "
                 + "uma comunidade perif??rica, voltado a micro produtores (microempreendedores) e "
                 + "prestadores de servi??o, com acesso por meio de computadores e dispositivos m??veis.";
                const iframe = document.createElement('iframe');
                iframe.setAttribute('src', "https://www.youtube.com/embed/kzish_hRkqM");
                iframe.setAttribute('title', "YouTube video player");
                iframe.setAttribute('frameborder', '0');
                iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
                iframe.setAttribute('allowfullscreen', '');
                viewProj.appendChild(iframe);
            }
            if (el.id === "portfolio1") {
                viewProj.innerText = "";
                 descProj.innerText = "";
                 descProj.innerText = "Meu 1?? Portf??lio: Primeiro projetinho que desenvolvi, estava bem no in??cio "
                 + "da minha caminhada na programa????o. Sabia utilizar basicamente o CSS e HTML "
                 + "Mas desde o primeiro projeto trabalhei com responsividade.";

                 const iframe = document.createElement('iframe');
                 iframe.setAttribute('src', "https://www.youtube.com/embed/PDZ49QSlF8E");
                 iframe.setAttribute('title', "YouTube video player");
                 iframe.setAttribute('frameborder', '0');
                 iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
                 iframe.setAttribute('allowfullscreen', '');
                 viewProj.appendChild(iframe);
             }

            if (el.id === "portfolio2") {
                viewProj.innerText = "";
                 descProj.innerText = "";
                 descProj.innerText = "Meu 2?? Portf??lio: J?? utilizada algumas t??cnicas melhores de CSS e HTML."
                 + "Come??ando a estudar JavaScript. Tamb??m ?? um projeto que conta com a responsividade. "
                 + "\nJ?? d?? pra notar alguma melhora, hein!?";

                 const iframe = document.createElement('iframe');
                 iframe.setAttribute('src', "https://www.youtube.com/embed/vD2sHXB_c4M");
                 iframe.setAttribute('title', "YouTube video player");
                 iframe.setAttribute('frameborder', '0');
                 iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
                 iframe.setAttribute('allowfullscreen', '');
                 viewProj.appendChild(iframe);
             }

            if (el.id === "tracking") {
                viewProj.innerText = "";
                 descProj.innerText = "";
                 descProj.innerText = "Processo Seletivo: Permiss??o de utilizar HTML, CSS, JavaScript e a biblioteca LeafterJS. "
                 + "Eles mandaram 5 arquivos JSON contendo dados em arrays dos equipamentos. Id do equipamento, Id do modelo, o modelo, "
                 + "Historico de posicionamento no mapa, status de funcionamento e historico de status."
                 + "O objetivo era mostrar o ultimo posicionamento no mapa, ??ltimo status, modelo e historico de status.";


                 const iframe = document.createElement('iframe');
                 iframe.setAttribute('src', "https://www.youtube.com/embed/vF0V7XCUsvg");
                 iframe.setAttribute('title', "YouTube video player");
                 iframe.setAttribute('frameborder', '0');
                 iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
                 iframe.setAttribute('allowfullscreen', '');
                 viewProj.appendChild(iframe);
             }

            if (el.id === "contacts") {
                viewProj.innerText = "";
                 descProj.innerText = "";
                 descProj.innerText = "Agenda Telef??nica: Um projeto imposto por um curso online que estudo, que tem como objetvio criar uma agenda de contatos. "
                 + "?? um projeto que utiliza o padr??o MVC (Model-View-Controller), "
                 + "Utilizando as linguagens HTML, CSS, JavaScript e NodeJS, al??m disso foi trabalhado com npm e express."


                viewProj.innerText = "EM DESENVOLVIMENTO...";
            }

            if (el.id === "new-project") {
                viewProj.innerText = "";
                 descProj.innerText = "";
                 descProj.innerText = "Novo Projeto: Este campo est?? esperando um projeto da sua empresa."
                 + "\nS?? falta a oportunidade!"
                 + "\nMuita disposi????o e muita vontade de aprender!"


                viewProj.innerText = "NO AGUARDO!";
            }

        })

    }

    
}

const project = new Projects();

class Copiar {
    constructor() {
        this.copiar();
    }

    copiar() {
        document.addEventListener('click', e => {
            const el = e.target;
            let email = document.getElementById("text-email");

            if (el.id === 'logo-gmail') {
                console.log(el.id);
                email.select();
                email.setSelectionRange(0, 99999);

                document.execCommand("copy");
                alert("Email copiado");
            }
        })
    }
}

const copia = new Copiar();



