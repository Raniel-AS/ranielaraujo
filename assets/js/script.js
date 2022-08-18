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
                 descProj.innerText = "Tá na mão: Página Web que hospeda anúncios locais, atendendo inicialmente "
                 + "uma comunidade periférica, voltado a micro produtores (microempreendedores) e "
                 + "prestadores de serviço, com acesso por meio de computadores e dispositivos móveis.";
                const video = document.createElement('video');
                const source = document.createElement('source');
                source.setAttribute('src', "https://onedrive.live.com/?cid=1754863C7E527E44&id=1754863C7E527E44%21263&parId=1754863C7E527E44%21262&o=OneUp")
                source.setAttribute('type', 'video/mp4');
                video.setAttribute('controls', "");
                video.appendChild(source);
                viewProj.appendChild(video);
            }
            if (el.id === "portfolio1") {
                viewProj.innerText = "";
                 descProj.innerText = "";
                 descProj.innerText = "Meu 1º Portfólio: Primeiro projetinho que desenvolvi, estava bem no início "
                 + "da minha caminhada na programação. Sabia utilizar basicamente o CSS e HTML "
                 + "Mas desde o primeiro projeto trabalhei com responsividade.";

                const video = document.createElement('video');
                const source = document.createElement('source');
                source.setAttribute('src', "https://youtu.be/PDZ49QSlF8E")
                source.setAttribute('type', 'video/mp4');
                video.setAttribute('controls', "");
                video.appendChild(source);
                viewProj.appendChild(video);
            }

            if (el.id === "portfolio2") {
                viewProj.innerText = "";
                 descProj.innerText = "";
                 descProj.innerText = "Meu 2º Portfólio: Já utilizada algumas técnicas melhores de CSS e HTML."
                 + "Começando a estudar JavaScript. Também é um projeto que conta com a responsividade. "
                 + "\nJá dá pra notar alguma melhora, hein!?";

                const video = document.createElement('video');
                const source = document.createElement('source');
                source.setAttribute('src', "https://youtu.be/vD2sHXB_c4M")
                source.setAttribute('type', 'video/mp4');
                video.setAttribute('controls', "");
                video.appendChild(source);
                viewProj.appendChild(video);
            }

            if (el.id === "tracking") {
                viewProj.innerText = "";
                 descProj.innerText = "";
                 descProj.innerText = "Processo Seletivo: Permissão de utilizar HTML, CSS, JavaScript e a biblioteca LeafterJS. "
                 + "Eles mandaram 5 arquivos JSON contendo dados em arrays dos equipamentos. Id do equipamento, Id do modelo, o modelo, "
                 + "Historico de posicionamento no mapa, status de funcionamento e historico de status."
                 + "O objetivo era mostrar o ultimo posicionamento no mapa, último status, modelo e historico de status.";


                const video = document.createElement('video');
                const source = document.createElement('source');
                source.setAttribute('src', "https://youtu.be/vF0V7XCUsvg")
                source.setAttribute('type', 'video/mp4');
                video.setAttribute('controls', "");
                video.appendChild(source);
                viewProj.appendChild(video);
            }

            if (el.id === "contacts") {
                viewProj.innerText = "";
                 descProj.innerText = "";
                 descProj.innerText = "Agenda Telefônica: Um projeto imposto por um curso online que estudo, que tem como objetvio criar uma agenda de contatos. "
                 + "É um projeto que utiliza o padrão MVC (Model-View-Controller), "
                 + "Utilizando as linguagens HTML, CSS, JavaScript e NodeJS, além disso foi trabalhado com npm e express."


                viewProj.innerText = "EM DESENVOLVIMENTO...";
            }

            if (el.id === "new-project") {
                viewProj.innerText = "";
                 descProj.innerText = "";
                 descProj.innerText = "Novo Projeto: Este campo está esperando um projeto da sua empresa."
                 + "\nSó falta a oportunidade!"
                 + "\nMuita disposição e muita vontade de aprender!"


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



