# Desafio Sunnyside Landing Page - Frontend-Mentor

Este é um desafio de uma landing page para a empresa Sunnyside proposto pelo site Frontend-Mentor.

## Tabela de Conteúdos

- [Visão Geral](#visão-geral)
    - [Imagens](#imagens)
    - [Link da página](#link)
- [Processo](#processo)
    - [Linguagens utilizadas](#linguagens-utilizadas)
    - [O que aprendi](#o-que-aprendi)
    - [Possíveis evoluções](#possíveis-evoluções)
- [Autor](#autor)

## Visão-geral

### Imagens

<br>

````
Versão de Desktop
````

   <img src="./src/design/desktop-design.gif" alt="desktop-design">

<br>

````
Versão Mobile
````

 <img src="./src/design/mobile-design.gif" alt="mobile-design">

### Link

- Página no GitHub Pages: <a href="https://julio-mansan2.github.io/sunnyside-landing-page">Clique aqui!</a>

## Processo

### Linguagens utilizadas

<br>

- Marcações semânticas de HTML5
- Propriedades de customização do CSS3
- Estruturas de JavaScript

<br>

### O que aprendi

<br>

- Criar um menu hambúrguer:

````html

<input id="menu__toggle" type="checkbox" />
<label class="menu__btn" for="menu__toggle">
<span></span>
</label>

````

````css

    #menu__toggle {
        opacity: 0;
    }

    #menu__toggle:checked+.menu__btn>span {
        transform: rotate(45deg);
    }

    #menu__toggle:checked+.menu__btn>span::before {
        top: 0;
        transform: rotate(0deg);
    }

    #menu__toggle:checked+.menu__btn>span::after {
        top: 0;
        transform: rotate(90deg);
    }

    .menu__btn {
        top: 1.8rem;
        right: 7%;
        position: absolute;
        width: 1.5rem;
        height: 1rem;
        cursor: pointer;
        z-index: 1;
    }

    .menu__btn>span,
    .menu__btn>span::before,
    .menu__btn>span::after {
        display: block;
        position: absolute;
        width: 100%;
        height: 2px;
        background-color: var(--white);
        transition-duration: .25s;
    }

    .menu__btn>span::before {
        content: '';
        top: -8px;
    }

    .menu__btn>span::after {
        content: '';
        top: 8px;
    }

    .header ul {
        position: absolute;
        top: 20%;
        width: 80%;
        gap: 1.25rem;
        gap: 1.8rem;
        height: fit-content;
        background-color: var(--white);
        left: -100%;
        padding: 1.8rem;
        align-items: center;
        flex-direction: column;
        background-size: contain;
        transition-duration: .25s;
    }

````

- Aplicar uma função ao menu hambúrguer:

````html

<input id="menu__toggle" type="checkbox" />
<label class="menu__btn" for="menu__toggle">
<span></span>
</label>

````
````javascript

const menuHamburguer = document.getElementById('menu__toggle')
const navMenu = document.getElementById('menu_box')

menuHamburguer.addEventListener('click', function () {
    if (menuHamburguer.checked) {
        navMenu.classList.add('aparecer')
    } else {
        navMenu.classList.remove('aparecer')
        navMenu.classList.add('ocultar')
    }
})

````

- Criar animações para elementos:

````css

.header-heading .arrow-down {
    animation: down-arrow 0.6s infinite alternate ease-in-out;
}

@-webkit-keyframes down-arrow {
    0% {-webkit-transform: translateY(0); opacity: 0.4;}
    100% {-webkit-transform: translateY(0.4em); opacity: 0.9;}
}

````

<br>

### Possíveis evoluções

<br>

- Utilizar menor quantidade de media querries;
- Entender melhor acerca das grid-areas.

<br>

## Autor

GitHub - <a href="https://github.com/julio-mansan2">julio-mansan2</a> <br>
Front-end Mentor - <a href="https://www.frontendmentor.io/profile/julio-mansan2">julio-mansan2</a> <br>