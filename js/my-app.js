// Initialize your app
var myApp = new Framework7({
    root: '#app',
    theme: 'md', //ios, md, auto
    modalTitle: 'App Coffee', //title for modals
    panel: {
        swipe: 'left',
    },
    cache: false,
    pushState: false,
    swipeBackPage: true,
    material: true,
    routes: [{
            path: '/home/',
            url: 'index.html',
            name: 'home',
        },
        {
            path: '/perfil/',
            url: 'perfil.html',
            name: 'perfil',
        },
        {
            path: '/cerveza/',
            url: 'beer.html',
            name: 'cerveza',
        },
        {
            path: '/drinks/',
            url: 'drinks.html',
            name: 'drinks',
        },
        {
            path: '/licores/',
            url: 'licores.html',
            name: 'licores',
        },
        {
            path: '/vinos/',
            url: 'vinos.html',
            name: 'vinos',
        },
        {
            path: '/bebidas/',
            url: 'bebidas.html',
            name: 'bebidas',
        },
        {
            path: '/comida/',
            url: 'comida.html',
            name: 'comida',
        },
        {
            path: '/info/',
            url: 'info.html',
            name: 'info',
        },
        {
            path: '/infoBeer/',
            url: 'infoBeer.html',
            name: 'infoBeer',
        },
        {
            path: '/infoVinos/',
            url: 'infoVinos.html',
            name: 'infoVinos',
        },
        {
            path: '/infoLicores/',
            url: 'infoLicores.html',
            name: 'infoLicores',
        },
        {
            path: '/infoBebidas/',
            url: 'infobebidas.html',
            name: 'infoBebidas',
        },
        {
            path: '/infoComida/',
            url: 'infoComida.html',
            name: 'infoComida',
        }


    ]
});

// Export selectors engine
var $$ = Dom7;