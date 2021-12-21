# tse-dev-web
### projet final dev web TSE DE3
<br />

## Arborescence du projet
```
├── README.md
├── fonts
│   ├── 70b628a2521876b8a7d11f8bfad52cd7.ttf
│   ├── savoye-let-plain-1-0.ttf
│   └── savoye-let-plain-1-0.woff
├── images
│   ├── 55849375_2746497575377379_1960753506650423296_o.jpg
│   ├── DSC_6337.JPG
│   ├── IMG_0537.jpg
│   ├── IMG_1842.jpg
│   ├── IMG_2224.JPG
│   ├── IMG_2224_2.png
│   ├── IMG_8020.JPG
│   ├── banner-small.jpg
│   ├── banner.jpg
│   ├── bergamo.jpg
│   ├── calanque.jpg
│   ├── chpfr.jpg
│   ├── croixprovence.jpg
│   ├── gouffreenfer.jpg
│   ├── gouffreenferhiver.jpg
│   ├── guizay-nov21.jpg
│   ├── guizay.jpg
│   ├── guizayhiver.jpg
│   ├── lagodicomo.jpg
│   ├── lagodigarda.jpg
│   ├── lagoiseo.jpg
│   ├── milan.jpg
│   ├── mondovi.jpg
│   ├── monza.jpg
│   ├── mouette.jpg
│   ├── murano.jpg
│   ├── photoCV.png
│   ├── popup-arrow.png
│   ├── rosalba.jpg
│   ├── stemetropole.jpg
│   ├── tlpE4.jpg
│   ├── torino.jpg
│   ├── venise-2.jpg
│   └── venise.jpg
├── index.html
└── scr
    ├── script.js
    ├── style-global.css
    ├── style-max-width-980.css
    ├── style-min-width-1250.css
    └── style-min-width-981-max-width-1249.css
```

Le dossier ```scr``` contient les fichiers css et javascript : 
- ```style-max-width-980.css```, ```style-min-width-1250.css``` et ```style-min-width-981-max-width-1249.css``` appliquent des styles selon les tailles d'écran (téléphones, tablettes, ordinateurs), de manière à avoir un site responsive.
-  ```style_global.css``` contient des styles communs aux différentes tailles d'écran.
- ```script.js``` contient l'ensemble des fonctions javascript et notamment jQuery qui permettent le bon fonctionnement du site.

Le dossier ```images``` contient toutes les images utilisées sur le site.

Le dossier ```fonts``` contient les polices de caractères utilisées dans le site internet. Seule la police par défaut : ```font-family: Calibri, sans-serif;``` n'y est pas car elle est déjà connue par les navigateurs.

Le fichier ```index.html``` est la page internet du site.

<br />

## Détail du fichier ```index.html```
Le site est divisé en plusieurs blocs distincts : 
- ```<noscript>``` : sert à afficher un message dans le cas ou l'utilisateur n'aurait pas activé ```javascript``` sur son navigateur

- ```<header>``` : contient le titre du site, disposé sur la gauche du ```header```, ainsi que les icones sociales. La modal contenant le formulaire de contact est également déclarée dans le ```header``` et s'affiche au clic sur l'icone ```fas fa-envelope```.

- ```<section>``` : ce sont les blocs principaux contenant les différentes rubriques du site
    - ```<section class="section-panel panel-item-banner" id="link-portal"></section>``` sert à afficher l'image de fond du site
    - ```<section class="section-panel panel-item-albums">``` permet d'afficher le portfolio avec la grille d'albums.

- ```<footer>``` : il est composé de 2 blocs ```<div class=preFooter>``` et ```<div class=preFooter>```. Le premier bloc sert à afficher le logo et le second à afficher les crédits &copy; et le nom.


<br /><hr />
&copy; 2021 - Thomas JAULGEY - TSE FISA DE3